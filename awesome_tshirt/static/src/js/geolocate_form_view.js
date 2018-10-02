odoo.define('awesome_tshirt.geolocate_form_view', function (require) {
    'use strict';

    var viewRegistry = require('web.view_registry');

    var AbstractField = require('web.AbstractField');
    var core = require('web.core');

    var FormView = require('web.FormView');
    var FormController = require('web.FormController');

    var qweb = core.qweb;
    var _t = core._t;

    var GeoLocateFormController = FormController.extend({
        renderButtons: function ($node) {
            this._super.apply(this, arguments)

            if (this.mode !== 'create') {
                this.$buttons.append(qweb.render("CustomerFormView.Buttons", {widget: this}));
                this.$buttons.on('click', '.o_button_geolocate', this._onGeoLocate.bind(this));
            }
        },
        _onGeoLocate: function () {
            var self = this;
            var res_id = this.model.get(this.handle, {raw: true}).res_id;
            this._rpc({
                model: 'res.partner',
                method: 'geo_localize',
                args: [res_id]
            }).then(function () {
                self.reload();
            });
        }
    });

    var GeoLocateFormView = FormView.extend({
        config: _.extend({}, FormView.prototype.config, {
            Controller: GeoLocateFormController
        })
    });

    viewRegistry.add('geolocate_form_view', GeoLocateFormView);

    return {
        GeoLocateFormController: GeoLocateFormController,
        GeoLocateFormView: GeoLocateFormView
    }
});
