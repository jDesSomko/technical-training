odoo.define('awesome_tshirt.Counter', function (require) {
    "use strict";

    var Widget = require('web.Widget');

    return Widget.extend({
        template: 'counter.template',
        xmlDependencies: ['/awesome_tshirt/static/src/xml/awesome_counter.xml'],
        events: {
            'click button.decrement': '_onClickDecrement',
            'click button.increment': '_onClickIncrement'
        },
        init: function (parent, value) {
            this._super(parent);
            this.value = value;
        },

        //-------------------------------
        // Public
        //-------------------------------
        increment: function () {
            this.value++;
            this.renderElement();
        },

        decrement: function () {
            this.value--;
            this.renderElement();
        },

        //-------------------------------
        // Handlers
        //-------------------------------
        _onClickIncrement: function () {
            this.increment();
        },
        _onClickDecrement: function () {
            this.decrement();
        }
    });
});