odoo.define('awesome_tshirt.image_preview', function (require) {
    'use strict';

    var AbstractField = require('web.AbstractField');
    var core = require('web.core');
    var field_registry = require('web.field_registry');

    var basicFields = require('web.basic_fields');

    var _t = core._t;

    var FieldImagePreview = basicFields.InputField.extend({
        className: 'o_field_image_preview',
        supportedFieldTypes: ['char'],

        /**
         * In readonly, should be an img, not a span.
         *
         * @override
         */
        init: function () {
            this._super.apply(this, arguments);
            this.tagName = this.mode === 'readonly' ? 'img' : 'input';
        },

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        /**
         * Returns the associated link.
         *
         * @override
         */
        getFocusableElement: function () {
            return this.mode === 'readonly' ? this.$el : this._super.apply(this, arguments);
        },

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
            if (!this.isSet()) {
                this.$el.html($('span').text(_t('Image URL not set')))
            } else {
                this.$el.attr('src', this.value);
            }
        }
    });

    field_registry.add('image_preview', FieldImagePreview);

    return FieldImagePreview
});
