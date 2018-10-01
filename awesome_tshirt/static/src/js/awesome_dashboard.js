odoo.define('awesome_tshirt.Dashboard', function (require) {
    "use strict";

    var ControlPanelMixin = require('web.ControlPanelMixin');
    var AbstractAction = require('web.AbstractAction');
    var Counter = require('awesome_tshirt.Counter');
    var core = require('web.core');

    var Dashboard = AbstractAction.extend(ControlPanelMixin, {
        start: function () {
            var counter = new Counter(this, 4);

            // Render and insert into DOM
            counter.appendTo(this.$el);
        }
    });

    core.action_registry.add('awesome-tshirt-action', Dashboard);

    return Dashboard;
});