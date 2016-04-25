System.register(['angular2/core', './item.component', './shopping.service'], function(exports_1, context_1) {
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
    var core_1, item_component_1, shopping_service_1;
    var ShoppingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (item_component_1_1) {
                item_component_1 = item_component_1_1;
            },
            function (shopping_service_1_1) {
                shopping_service_1 = shopping_service_1_1;
            }],
        execute: function() {
            ShoppingComponent = (function () {
                function ShoppingComponent(_shoppingService) {
                    this._shoppingService = _shoppingService;
                }
                ShoppingComponent.prototype.ngOnInit = function () {
                    this._itemList = this._shoppingService.getShoppingItemList();
                };
                ShoppingComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping',
                        templateUrl: './app/templates/shopping.template.html',
                        directives: [item_component_1.ItemComponent]
                    }), 
                    __metadata('design:paramtypes', [shopping_service_1.ShoppingService])
                ], ShoppingComponent);
                return ShoppingComponent;
            }());
            exports_1("ShoppingComponent", ShoppingComponent);
        }
    }
});
//# sourceMappingURL=shopping.component.js.map