/*sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("project1.controller.App", {
        onInit: function() {
          
        }
        onSayHello: function () {
          MessageBox.information("Hello World");
        }

      });
    }
  );*/
  sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
  ],
    function (Controller, MessageBox) {
      "use strict";
  
      return Controller.extend("project1.controller.App", {
  
        onSayHello: function () {
          MessageBox.information("Hello Raj");
        }
  
      });
    });


/*  sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {
    "use strict";
  
    XMLView.create({
      id: "App",
      viewName: "sap.training.exc.view.App"
    }).then(function (oView) {
      oView.placeAt("content");
    });
  
      });
  
  });*/
  