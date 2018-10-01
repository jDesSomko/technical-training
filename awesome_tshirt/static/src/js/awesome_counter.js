odoo.define('awesome_tshirt.Counter', function (require) {
    "use strict";

    var Widget = require('web.Widget');

    return Widget.extend({
        template: 'counter.template',
        xmlDependencies: ['/awesome_tshirt/static/xml/awesome_counter.xml'],
        events: {
            click: '_onClick'
        },
        init: function (parent, value) {
            this._super(parent);
            this.value = value;
        },
        start: function () {
            this._render();
        },

        //-------------------------------
        // Public
        //-------------------------------
        increment: function () {
            this.value++;
            this._render();
        },

        //-------------------------------
        // Private
        //-------------------------------
        _render: function () {
            this.$el.html(
                $('<span>').text(this.value)
            );
        },

        //-------------------------------
        // Handlers
        //-------------------------------
        _onClick: function () {
            this.increment();
        }
    });
});