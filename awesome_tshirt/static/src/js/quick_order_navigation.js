odoo.define('awesome_tshirt.QuickOrderNavigation', function (require) {
    "use strict";

    var SystrayMenu = require('web.SystrayMenu');

    var QuickOrderNavigation = Widget.extend({

    });

    SystrayMenu.items.push(QuickOrderNavigation);

    return QuickOrderNavigation
});