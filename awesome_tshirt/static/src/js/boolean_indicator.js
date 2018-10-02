odoo.define('awesome_tshirt.boolean_indicator', function (require) {
    'use strict';

    var AbstractField = require('web.AbstractField');
    var core = require('web.core');
    var field_registry = require('web.field_registry');

    var basicFields = require('web.basic_fields');

    var _t = core._t;

    var FieldBooleanIndicator = basicFields.FieldBoolean.extend({
        className: 'o_field_boolean_indicator',

        //--------------------------------------------------------------------------
        // Private
        //--------------------------------------------------------------------------

        /**
         * In readonly, should be a img.
         *
         * @override
         * @private
         */
        _renderReadonly: function () {
            if (this.value) {
                this.$el = $('<span class="boolean_indicator boolean_indicator_true" />')
            } else {
                this.$el = $('<span class="boolean_indicator boolean_indicator_false" />')
            }
        },

        _render: function () {
            this.$el.html($('<div>').css({
                backgroundColor: this.value ? this.lateColor : this.notLateColor
            }));
        }
    });

    field_registry.add('boolean_indicator', FieldBooleanIndicator);

    return FieldBooleanIndicator
});
