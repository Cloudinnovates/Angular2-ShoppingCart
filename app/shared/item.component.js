System.register(['angular2/core', './quantity.widget.component', './savelisticon.component', '../services/shopping.service'], function(exports_1, context_1) {
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
    var core_1, quantity_widget_component_1, savelisticon_component_1, shopping_service_1;
    var ItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (quantity_widget_component_1_1) {
                quantity_widget_component_1 = quantity_widget_component_1_1;
            },
            function (savelisticon_component_1_1) {
                savelisticon_component_1 = savelisticon_component_1_1;
            },
            function (shopping_service_1_1) {
                shopping_service_1 = shopping_service_1_1;
            }],
        execute: function() {
            //import {HTTP_PROVIDERS} from 'angular2/http';
            ItemComponent = (function () {
                function ItemComponent(_shoppingService) {
                    this._shoppingService = _shoppingService;
                }
                ;
                ItemComponent.prototype.ngOnInit = function () {
                    // console.log(this._item);
                };
                ItemComponent.prototype.addItem = function ($event) {
                    // console.log("add this item....");
                    this._item.quantity = $event.quantity;
                    this._shoppingService.addItemtoBasket(this._item);
                };
                ItemComponent.prototype.deleteItem = function ($event) {
                    // console.log("delete this item....");
                    this._item.quantity = $event.quantity;
                    this._shoppingService.deleteItemFromBasket(this._item);
                };
                ItemComponent.prototype.saveItem = function () {
                    console.log(" save item to list");
                    this._shoppingService.addItemtoSavedList(this._item);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ItemComponent.prototype, "_item", void 0);
                ItemComponent = __decorate([
                    core_1.Component({
                        selector: "item",
                        templateUrl: './app/templates/item.template.html',
                        styles: ["\n       .priceperkg {\n            left: 0px;\n            position: relative;\n            display: inline-table;\n        }\n        .price {\n            position: relative;\n            right: 2%;\n            float: right;\n        }\n        quantity-widget {\n            float: right;\n       }\n       save-list-icon {\n           font-size:15px;\n           float:left;  \n           cursor:pointer; \n       }\n       \n   "],
                        directives: [quantity_widget_component_1.QuantityWidgetComponent, savelisticon_component_1.SaveListIconComponent]
                    }), 
                    __metadata('design:paramtypes', [shopping_service_1.ShoppingService])
                ], ItemComponent);
                return ItemComponent;
            }());
            exports_1("ItemComponent", ItemComponent);
        }
    }
});
//# sourceMappingURL=item.component.js.map