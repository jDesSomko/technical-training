odoo.define('awesome_tshirt.HomeMenu', function (require) {
    "use strict";

    var core = require('web.core');
    var HomeMenu = require('web_enterprise.HomeMenu');
    var session = require('web.session');

    var _t = core._t;

    HomeMenu.include({
        willStart: function () {
            var self = this;

            var startDef = this._super.apply(this, arguments)
            var rpcDef = this._rpc(
                {route: '/awesome_tshirt/bafienistalkingtoyou'}
            ).then(function (result) {
                self.$message = result
            })

            return $.when(startDef, rpcDef)
        },

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
            var $message = $('<div>', {
                class: 'p-2 alert-warning o_custom_message'
            }).text(this.$message);

            self.$('.o_custom_message').remove();
            self.$el.prepend($message);

            var session_message = $('<div>', {
                class: 'p-2 alert-warning o_custom_motd'
            }).text(session.motd);

            self.$('.o_custom_motd').remove();
            self.$el.prepend(session_message);
        }
    });
});