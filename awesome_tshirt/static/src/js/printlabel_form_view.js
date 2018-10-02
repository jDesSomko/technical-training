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
        init: function () {
            this._super.apply(this, arguments);
            // printing flag is used to prevent from doing concurrent RPCs to print
            // the label (e.g. if the user double-clicks on the button)
            this.printing = false;
        },
        renderButtons: function () {
            this._super.apply(this, arguments);
            this.$buttons.addClass('o_order_form_buttons');
            this.$buttons.append(qweb.render('OrderFormView.Buttons'));
            this.$buttons.on('click', '.o_print_label', this._onPrintLabel.bind(this));
        },
        _updateButtons: function () {
            this._super.apply(this, arguments);
            if (this.$buttons) {
                var state = this.model.get(this.handle, {raw: true});
                var disabled = this.mode === 'edit' && !state.res_id;
                var primary = state.data.customer_id && state.data.state === 'printed';
                this.$buttons.find('.o_print_label')
                    .toggleClass('btn-primary', primary)
                    .toggleClass('btn-secondary', !primary)
                    .attr('disabled', !!disabled);
            }
        },
        _onPrintLabel: function () {
            var self = this;
            if (this.printing) {
                return;
            }
            this.printing = true;
            var res_id = this.model.get(this.handle, {raw: true}).res_id;
            this._rpc({
                model: 'awesome_tshirt.order',
                method: 'print_label',
                args: [res_id],
            }).then(function (result) {

                if (result) {
                    this.do_notify(_t("Success"), _t("Your printing request has been sent."));
                    self.printing = false;
                    self.reload();
                } else {
                    this.do_warn(_t("Error"), _t("Printing failed."));
                }
            });
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
