odoo.define('awesome_tshirt.HomeMenu', function (require) {
    "use strict";

    var AppSwitcher = require('web_enterprise.AppSwitcher');

    AppSwitcher.include({
        render: function () {
            this._super();
            // do something else here...
        }
    });

    return HomeMenu
});