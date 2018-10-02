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

        _render: function () {
            if (this.value) {
                this.$el.html($('<span class="boolean_indicator boolean_indicator_true" />'))
            } else {
                this.$el.html($('<span class="boolean_indicator boolean_indicator_false" />'))
            }
        }
    });

    field_registry.add('boolean_indicator', FieldBooleanIndicator);

    return FieldBooleanIndicator
});
