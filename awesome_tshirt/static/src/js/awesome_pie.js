odoo.define('awesome_tshirt.Pie', function (require) {
    "use strict";

    var Widget = require('web.Widget');
    var ajax = require('web.ajax');

    return Widget.extend({
        template: 'pie.template',
        xmlDependencies: ['/awesome_tshirt/static/src/xml/awesome_pie.xml'],
        jsLibs: [
            '/awesome_tshirt/static/lib/chart.js/Chart.js'
        ],
        events: {
            'click button.decrement': '_onClickDecrement',
            'click button.increment': '_onClickIncrement'
        },
        init: function (parent, values) {
            this._super(parent);
            this.values = values;
        },
        willStart: function() {
            var self = this;
            return $.when(ajax.loadLibs(this), this._super()).then(function() {
                return self.fetch_data();
            });
        },
        start: function () {
            this._super.apply(this, arguments);

            var ctx1 = this.$el.find("#pie-chart-canvas");

            var data2 = {
                labels: ["match1", "match2", "match3", "match4", "match5"],
                datasets: [
                    {
                        label: "TeamB Score",
                        data: [20, 35, 40, 60, 50],
                        backgroundColor: [
                            "#FAEBD7",
                            "#DCDCDC",
                            "#E9967A",
                            "#F5DEB3",
                            "#9ACD32"
                        ],
                        borderColor: [
                            "#E9DAC6",
                            "#CBCBCB",
                            "#D88569",
                            "#E4CDA2",
                            "#89BC21"
                        ],
                        borderWidth: [1, 1, 1, 1, 1]
                    }
                ]
            };

            //options
            var options = {
                responsive: true,
                title: {
                    display: true,
                    position: "top",
                    text: "Pie Chart",
                    fontSize: 18,
                    fontColor: "#111"
                },
                legend: {
                    display: true,
                    position: "bottom",
                    labels: {
                        fontColor: "#333",
                        fontSize: 16
                    }
                }
            };

            this.chart1 = new Chart(ctx1, {
                type: "pie",
                data: data2,
                options: options
            });
        }
    });
});