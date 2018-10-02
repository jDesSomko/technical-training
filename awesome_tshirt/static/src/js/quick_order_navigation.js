odoo.define('awesome_tshirt.QuickOrderNavigation', function (require) {
    "use strict";

    var SystrayMenu = require('web.SystrayMenu');
    var Widget = require('web.Widget');
    var core = require('web.core');

    var qweb = core.qweb;
    var _t = core._t;

    var QuickOrderNavigation = Widget.extend({

    });

    SystrayMenu.Items.push(QuickOrderNavigation);

    return QuickOrderNavigation
});