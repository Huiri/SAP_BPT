sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("project1.controller.App", {
        onInit() {
        },
        onRequest : function (){
          this.getOwnerComponent().getRouter().navTo("Request");
        },
        onCompany : function (){
          this.getOwnerComponent().getRouter().navTo("GridCompany");
        }
      });
    }
  );
  