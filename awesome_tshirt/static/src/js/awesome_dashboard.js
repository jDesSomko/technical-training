odoo.define('awesome_tshirt.Dashboard', function (require) {
    "use strict";

    var ControlPanelMixin = require('web.ControlPanelMixin');
    var AbstractAction = require('web.AbstractAction');
    var Counter = require('awesome_tshirt.Counter');
    var core = require('web.core');

    var Dashboard = AbstractAction.extend(ControlPanelMixin, {
        template: 'awesome_tshirt.dashboard',
        events: {
            'click button.customer': '_onClickCustomer',
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
            return this.do_action({
                type: 'ir.actions.act_window',
                res_model: 'res.partner',
                views: [[false, 'kanban']],
                target: 'current'
            });
        },
        _onClickNewOrders: function (ev) {
            ev.preventDefault();
            return this.do_action({
                type: 'ir.actions.act_window',
                res_model: 'res.partner',
                views: [[false, 'kanban']],
                target: 'current'
            });
        },
        _onClickCancelledOrders: function (ev) {
            ev.preventDefault();
            return this.do_action({
                type: 'ir.actions.act_window',
                res_model: 'res.partner',
                views: [[false, 'kanban']],
                target: 'current'
            });
        }
    });

    core.action_registry.add('awesome-tshirt-action', Dashboard);

    return Dashboard;
});