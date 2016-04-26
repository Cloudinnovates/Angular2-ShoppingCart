System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var QuantityWidgetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            QuantityWidgetComponent = (function () {
                function QuantityWidgetComponent() {
                    this._quantity = 4;
                    this.add = new core_1.EventEmitter();
                    this.delete = new core_1.EventEmitter();
                }
                QuantityWidgetComponent.prototype.onAddButtonClick = function () {
                    // console.log("add the item  to the basket");
                    this._quantity += 1;
                    this.add.emit({ quantity: this._quantity });
                };
                QuantityWidgetComponent.prototype.onMinusButtonClick = function () {
                    // console.log("remove the item  to the basket");
                    if (this._quantity != 0) {
                        this._quantity -= 1;
                        this.delete.emit({ quantity: this._quantity });
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], QuantityWidgetComponent.prototype, "_quantity", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], QuantityWidgetComponent.prototype, "add", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], QuantityWidgetComponent.prototype, "delete", void 0);
                QuantityWidgetComponent = __decorate([
                    core_1.Component({
                        selector: "quantity-widget",
                        templateUrl: './app/templates/quantitywidget.template.html',
                        styles: ["\n        .btn-default {\n            color: #ffffff;\n            background-color: green;\n            cursor:pointer;\n        }\n        .btn-minus {\n            cursor:pointer;\n        }\n         .btn-minus.disabled{\n            cursor:default;\n        }\n        .disabled{\n            color:rgba(0,0,0,0.1);\n        }\n    \n    \n    "],
                    }), 
                    __metadata('design:paramtypes', [])
                ], QuantityWidgetComponent);
                return QuantityWidgetComponent;
            }());
            exports_1("QuantityWidgetComponent", QuantityWidgetComponent);
        }
    }
});
//# sourceMappingURL=quantity.widget.component.js.map