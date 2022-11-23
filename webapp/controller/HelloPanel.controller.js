sap.ui.define([
    // "sap/ui/core/mvc/Controller"
    'sap/m/MessageToast','sap/ui/core/mvc/Controller', "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    //  function(MessageToast, Controller) {
    //     "use strict";
    
    //     return Controller.extend("sap.m.sample.MessageToast.controller.MessageToast", {
    
    //         handleMessageToastPress: function(oEvent) {
    //             var msg = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\r\n eirmod.';
    //             MessageToast.show(msg);
    //         }
    //     });
    // },
    //
    function (MessageToast, Controller, JSONModel) {
        "use strict";

        return Controller.extend("project1.controller.HelloPanel", {
            onInit: function () {
                var oData = {
                    recipient : {
                        name:"World",
                    }
                };
                var oData2 = {
                    recipient : {
                        name2 : "World2"
                    }
                };
                var oModel = new JSONModel(oData);
                var oModel2 = new JSONModel(oData2);

                this.getView().setModel(oModel, "test");
                this.getView().setModel(oModel2, "test2");
                console.log(this.getView().getModel("test").getProperty("/recipient/name"));

            },
            onPress : function ( ){
                alert("안녕하세요.");
            },
            handleMessageToastPress: function(oEvent) {
                var msg = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\r\n eirmod.';
                MessageToast.show(msg);
            },
            test:function(){
                console.log(this.getView().getModel("tets").getProperty("/recipient/name"))
            }
        });
        
    });
 

