System.register(['angular2/http', 'angular2/core', 'rxjs/add/operator/map', 'rxjs/Observable', 'rxjs/add/operator/share'], function(exports_1, context_1) {
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
    var http_1, core_1, Observable_1;
    var ShoppingService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_2) {}],
        execute: function() {
            ShoppingService = (function () {
                function ShoppingService(_http) {
                    var _this = this;
                    this._http = _http;
                    this._basketValue = 0;
                    this._basketItems = [];
                    this._savedListItems = [];
                    // Create Observable Stream to output our data
                    this.userBasketObservable$ = new Observable_1.Observable(function (observer) { return _this._userBasketObserver = observer; }).share();
                    this._shoppingItems = [
                        {
                            id: 1,
                            name: "Gala Apples",
                            type: "apples",
                            image: "Apples_1.jpg",
                            priceperunit: "2.50/kg",
                            price: 260,
                            quantity: 0
                        },
                        {
                            id: 2,
                            name: "Granny Apples",
                            type: "apples",
                            image: "Apples_2.jpg",
                            priceperunit: "2.00/kg",
                            price: 200,
                            quantity: 0
                        },
                        {
                            id: 3,
                            name: "Rose Apples",
                            type: "apples",
                            image: "Apples_3.jpg",
                            priceperunit: "3.00/kg",
                            price: 300,
                            quantity: 0
                        },
                        {
                            id: 4,
                            name: "Red Grapes",
                            type: "grapes",
                            image: "Grapes_1.jpg",
                            priceperunit: "3.00/kg",
                            price: 300,
                            quantity: 0
                        },
                        {
                            id: 5,
                            name: "Red Grapes",
                            type: "grapes",
                            image: "Grapes_2.jpg",
                            priceperunit: "3.00/kg",
                            price: 300,
                            quantity: 0
                        },
                        {
                            id: 6,
                            name: "Value Banana",
                            type: "bananas",
                            image: "Banana_1.jpg",
                            priceperunit: "1.00/kg",
                            price: 100,
                            quantity: 0
                        },
                        {
                            id: 7,
                            name: "Fair Trade Banana",
                            type: "bananas",
                            image: "Banana_2.jpg",
                            priceperunit: "1.20/kg",
                            price: 120,
                            quantity: 0
                        },
                    ];
                }
                ShoppingService.prototype.intialise = function () {
                    // this._http.get(this._url).map(res =>res.json()).subscribe(res =>{ this._userBasketObserver.next(res);});
                    this._userBasketObserver.next({ guidePrice: this._basketValue, basketItems: this._basketItems, savedListItems: this._savedListItems });
                };
                ShoppingService.prototype.addItemtoBasket = function (item) {
                    this._basketValue += 1;
                    var itemIndex = this._basketItems.indexOf(item);
                    if (itemIndex != -1) {
                        console.log(this._basketItems[itemIndex]);
                    }
                    else {
                        this._basketItems.push(item);
                    }
                    // Push the new list of todos into the Observable stream
                    this._userBasketObserver.next({ guidePrice: this._basketValue, basketItems: this._basketItems, savedListItems: this._savedListItems });
                };
                ShoppingService.prototype.deleteItemFromBasket = function (item) {
                    this._basketValue -= 1;
                    var itemIndex = this._basketItems.indexOf(item);
                    if (this._basketItems[itemIndex].quantity == 0) {
                        this._basketItems.splice(itemIndex, 1);
                    }
                    // Push the new list of todos into the Observable stream
                    this._userBasketObserver.next({ guidePrice: this._basketValue, basketItems: this._basketItems, savedListItems: this._savedListItems });
                };
                ShoppingService.prototype.addItemtoSavedList = function (item) {
                    var itemIndex = this._savedListItems.indexOf(item);
                    if (itemIndex != -1) {
                        console.log(this._savedListItems[itemIndex]);
                    }
                    else {
                        this._savedListItems.push(item);
                        console.log("added item to the saved list");
                    }
                    // Push the new list of todos into the Observable stream
                    this._userBasketObserver.next({ guidePrice: this._basketValue, basketItems: this._basketItems, savedListItems: this._savedListItems });
                };
                ShoppingService.prototype.updateShoppingItem = function () {
                };
                ShoppingService.prototype.getShoppingItemList = function () {
                    return this._shoppingItems;
                };
                ShoppingService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ShoppingService);
                return ShoppingService;
            }());
            exports_1("ShoppingService", ShoppingService);
        }
    }
});
//# sourceMappingURL=shopping.service.js.map