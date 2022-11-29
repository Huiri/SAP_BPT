sap.ui.define([], function(){
    "use strict";
    return {
        test:function(){
            alert("?");
        },
        statusText : function(sStatus){
            switch(sStatus){
                case "A" :
                    return "승인";
                case "B" :
                    return "처리 대기";
                case "C" :
                    return "반려";
                default :
                    return sStatus;
            }
        },
        creditStatus : function (sStatus){
            switch(sStatus){
                case "trust" :
                    return "신뢰";
                case "hold" :
                    return "보류";
                case "caution" :
                    return "주의";
                default :
                    return sStatus;
            }
        }
    }
})