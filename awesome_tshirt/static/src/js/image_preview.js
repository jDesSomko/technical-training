odoo.define('awesome_tshirt.image_preview', function (require) {
    'use strict';

    var AbstractField = require('web.AbstractField');
    var core = require('web.core');
    var field_registry = require('web.field_registry');

    var basicFields = require('web.basic_fields');

    var _t = core._t;

    var FieldImagePreview = basicFields.FieldChar.extend({
        className: 'o_field_image_preview',

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        isSet: function () {
            return true;
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
            if (!!this.value) {
                this.$el.html($('<img>', {'src': this.value}).error(function () {
                    $(this).replaceWith($('<span>', {
                        'text': _t('Image URL not set'),
                        'class': 'text-danger'
                    }))
                }))
            } else {
                this.$el.text(_t('Image URL not set')).addClass('text-danger')
            }
        }
    });

    field_registry.add('image_preview', FieldImagePreview);

    return FieldImagePreview
});
