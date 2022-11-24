sap.ui.define([
    'sap/ui/core/mvc/Controller', "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("project1.controller.Request", {
            onInit: function () {
        
            },

            getSelectedIndices : function () {
                var aIndices = this.byId("ui_table").getSelectedIndices();
                var sMsg;
                if (aIndices.length < 1) {
                    sMsg = "no item selected";
                } else {
                    sMsg = aIndices;
                }
                MessageToast.show(sMsg);
    
            },

            getContextByIndex: function() {
                var oTable = this.byId("ui_table");
                var iIndex = oTable.getSelectedIndex();
                var sMsg;
                if (iIndex < 0) {
                    sMsg = "no item selected";
                } else {
                    sMsg = oTable.getContextByIndex(iIndex);
                }
                MessageToast.show(sMsg);
            },

            //table col 여러개 선택 가능
            updateMultipleSelection: function(oEvent) {
                var oMultiInput = oEvent.getSource(),
                    sTokensPath = oMultiInput.getBinding("tokens").getContext().getPath() + "/" + oMultiInput.getBindingPath("tokens"),
                    aRemovedTokensKeys = oEvent.getParameter("removedTokens").map(function(oToken) {
                        return oToken.getKey();
                    }),
                    aCurrentTokensData = oMultiInput.getTokens().map(function(oToken) {

                        return {"Key" : oToken.getKey(), "Name" : oToken.getText()};
                    });
    
                aCurrentTokensData = aCurrentTokensData.filter(function(oToken){
                    return aRemovedTokensKeys.indexOf(oToken.Key) === -1;
                });
                console.log(oMultiInput.getModel().setProperty(sTokensPath, aCurrentTokensData));

            },
            	
    
        });
        
    });
 

