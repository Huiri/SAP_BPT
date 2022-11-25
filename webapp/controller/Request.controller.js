sap.ui.define([
    'sap/ui/core/mvc/Controller', "sap/m/MessageToast",
    "../model/formatter", "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator", 
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, formatter, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("project1.controller.Request", {
            formatter:formatter, //해당 이름의 메소드로 사용하겠다고 선언
            
            onInit: function () {
        
            },
            onSearch : function () {
                let ReqNum = this.byId("ReqNum").getValue();
                // this.byId("ReqNum").getText();
                let ReqGood = this.byId("ReqGood").getValue();
                let ReqDate = this.byId("ReqDate").getValue();
                let Requester = this.byId("Requester").getValue();
                let ReqStatus = this.byId("ReqStatus").getSelectedKey();

                if(ReqDate){
                    let ReqYear = ReqDate.split(". ")[0];
                    let ReqMonth = ReqDate.split(". ")[1].padStart(2,'0');
                    ReqDate = ReqYear + "-" + ReqMonth;
                }

                var aFilter = [];

                if(ReqNum) {aFilter.push(new Filter("ReqNum", FilterOperator.Contains, ReqNum))}
                if(ReqGood) {aFilter.push(new Filter("ReqGood", FilterOperator.Contains, ReqGood))}
                if(Requester) {aFilter.push(new Filter("Requester", FilterOperator.Contains, Requester))}
                if(ReqDate) {aFilter.push(new Filter("ReqDate", FilterOperator.Contains, ReqDate))}
                if(ReqStatus) {aFilter.push(new Filter("ReqStatus", FilterOperator.Contains, ReqStatus))}
                
                let oTable = this.byId("ui_table").getBinding("rows");
                oTable.filter(aFilter);

            },
            onReset : function () {
                this.byId("ReqNum").setValue("");
                this.byId("ReqGood").setValue("");
                this.byId("Requester").setValue("");
                this.byId("ReqStatus").setSelectedKey(""); 
                this.byId("ReqDate").setValue(""); 
                
                this.onSearch();
            },
            // onAfterRendering: function(evt) {
            //     var oTable = this.byId("ui_table");
            //     var iIndex = oTable.getSelectedIndex();
            //     var sMsg;

            //     sMsg = oTable.getContextByIndex(iIndex);
            //     addEventListener("click", function (evt) {
            //         alert(sMsg);
            //     });
            // },

            getSelectedIndices : function () {
                const rows = document.querySelector("button");
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
            //원하는 row값 출력
            getContext : function(){
                var oTable = this.byId("ui_table");
                var iIndex = oTable.getSelectedIndex();
                var sMsg, row_value;
                if (iIndex < 0) {
                    sMsg = "no item selected";
                } else {
                    sMsg = oTable.getContextByIndex(iIndex);
                    var row_value = sMsg.sPath;
                }
                MessageToast.show(this.getView().getModel("Request").getProperty(row_value));
                console.log(this.getView().getModel("Request").getProperty(row_value));
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
            //선택 취소
            clearSelection: function(evt) {
                this.byId("ui_table").clearSelection();
            },
            	
    
        });
        
    });
 

