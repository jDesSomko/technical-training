odoo.define('awesome_tshirt.dashboard', function (require) {
    "use strict";

    var ControlPanelMixin = require('web.ControlPanelMixin');
    var AbstractAction = require('web.AbstractAction');
    var core = require('web.core');

    var ClientAction = AbstractAction.extend(ControlPanelMixin, {

    });

    core.action_registry.add('awesome-tshirt-action', ClientAction);

    return {};
});