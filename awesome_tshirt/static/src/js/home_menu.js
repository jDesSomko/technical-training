odoo.define('awesome_tshirt.HomeMenu', function (require) {
    "use strict";

    var core = require('web.core');
    var HomeMenu = require('web_enterprise.HomeMenu');
    var _t = core._t;

    HomeMenu.include({
        //--------------------------------------------------------------------------
        // Private
        //--------------------------------------------------------------------------
        /**
         * @override
         * @private
         */
        _render: function () {
            this._super.apply(this, arguments);

            var self = this

            this._rpc({route: '/awesome_tshirt/bafienistalkingtoyou'}).then(function (result) {
                var $message = $('<div>', {
                    class: 'p-2 alert-warning o_custom_message'
                }).text(result);

                $('<i class="fa fa-eye"></i><i class="fa fa-eye"></i>').appendTo($message);

                self.$('.o_custom_message').remove();
                self.$el.prepend($message);
            })
        }
    });
});