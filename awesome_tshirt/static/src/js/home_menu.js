odoo.define('awesome_tshirt.HomeMenu', function (require) {
    "use strict";

    var HomeMenu = require('web_enterprise.HomeMenu');

    HomeMenu.include({
        render: function () {
            this._super();
            // do something else here...
        }
    });

    return HomeMenu
});