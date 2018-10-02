odoo.define('awesome_tshirt.printlabel_form_view', function (require) {
    'use strict';

    var viewRegistry = require('web.view_registry');

    var AbstractField = require('web.AbstractField');
    var core = require('web.core');

    var FormView = require('web.FormView');
    var FormController = require('web.FormController');

    var qweb = core.qweb;
    var _t = core._t;

    var PrintLabelFormController = FormController.extend({
        renderButtons: function ($node) {
            this._super.apply(this, arguments)

            if (this.mode !== 'create') {
                this.$buttons.append(QWeb.render("awesome_tshirt.GeoLocateButton", {widget: this}));
                this.$buttons.on('click', '.o_button_geolocate', this._onGeoLocate.bind(this));
            }
        },
        _onGeoLocate: function () {
            
        }
    });

    var PrintLabelFormView = FormView.extend({
        config: _.extend({}, FormView.prototype.config, {
            Controller: PrintLabelFormController
        })
    });

    viewRegistry.add('printlabel_form_view', PrintLabelFormView);

    return {
        PrintLabelFormController: PrintLabelFormController,
        PrintLabelFormView: PrintLabelFormView
    }
});
