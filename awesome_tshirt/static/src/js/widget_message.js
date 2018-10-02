odoo.define('awesome_tshirt.widget_message', function (require) {
    'use strict';

    var Widget = require('web.Widget');
    var widgetRegistry = require('web.widget_registry');

    var core = require('web.core');
    var _t = core._t;

    var WidgetMessage = Widget.extend({
        init: function (parent, dataPoint) {
            this.data = dataPoint.data;
        },
        start: function () {
            this.update_message(this.data)
        },
        updateState: function (dataPoint) {
            this.update_message(dataPoint.data);
        },
        update_message: function (data) {
            var message

            if (!data.image_url) {
                message = $('<div class="alert alert-info">').text('No image!')
            } else if (data.amount > 100) {
                message = $('<div class="alert alert-info">').text('Add promotional material!')
            } else {
                message = false
            }

            this.$el.empty()
            if (!!message) {

                this.$el.html(message)
            }
        }
    });

    widgetRegistry.add('widget_message', WidgetMessage);

    return WidgetMessage
});
