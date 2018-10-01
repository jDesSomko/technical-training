odoo.define('awesome_tshirt.Dashboard', function (require) {
    "use strict";

    var ControlPanelMixin = require('web.ControlPanelMixin');
    var AbstractAction = require('web.AbstractAction');
    var Counter = require('awesome_tshirt.Counter');
    var core = require('web.core');

    var Dashboard = AbstractAction.extend(ControlPanelMixin, {
        template: 'awesome_tshirt.dashboard',
        events: {
            'click button.open_customers': '_onClickCustomer',
            'click button.cancelled_orders': '_onClickCancelledOrders',
            'click button.new_orders': '_onClickNewOrders'
        },
        start: function () {
            var counter = new Counter(this, 4);

            // Render and insert into DOM
            counter.appendTo(this.$el.find('.counter'));
        },
        _onClickCustomer: function (ev) {
            ev.preventDefault();
            return this.do_action('base.action_partner_customer_form');
        },
        _onClickNewOrders: function (ev) {
            ev.preventDefault();

            var d = new Date()
            d.setDate(d.getDate()-5);

            return this._do_action_orders('New Orders', [
                ['create_date', '>=', d],
                ['state', '=', 'new']
            ])
        },
        _onClickCancelledOrders: function (ev) {
            ev.preventDefault();

            var d = new Date()
            d.setDate(d.getDate()-5);

            return this._do_action_orders('New Orders', [
                ['create_date', '>=', d],
                ['state', '=', 'cancel']
            ])
        },
        _do_action_orders: function(name, domain) {
            return this.do_action({
                name: name,
                type: 'ir.actions.act_window',
                res_model: 'awesome_tshirt.order',
                views: [[false, 'kanban']],
                target: 'current',
                domain: domain
            });
        }
    });

    core.action_registry.add('awesome-tshirt-action', Dashboard);

    return Dashboard;
});