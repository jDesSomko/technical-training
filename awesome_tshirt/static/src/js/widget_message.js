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
            this.$el.text(this.data.foo + "!");
        },
        updateState: function (dataPoint) {
            this.$el.text(dataPoint.data.foo + "!");
        }
    });

    widgetRegistry.add('widget_message', WidgetMessage);

    return WidgetMessage
});
