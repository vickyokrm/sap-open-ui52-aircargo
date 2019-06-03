sap.ui.define([
    "./BaseController"
], function (BaseController) {
    "use strict";
    return BaseController.extend("opensap.orders.controller.Create", {

        onInit: function () {
            this.getRouter().getRoute("create").attachPatternMatched(this._onCreateMatched, this);
        },

        _onCreateMatched: function (oEvent) {
            this.getModel("appView").setProperty("/layout", "ThreeColumnsMidExpanded");
        }

    });
});