System.register(['angular2/core', 'angular2/router', './shopping.service'], function(exports_1, context_1) {
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
    var core_1, router_1, shopping_service_1;
    var NavbarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (shopping_service_1_1) {
                shopping_service_1 = shopping_service_1_1;
            }],
        execute: function() {
            NavbarComponent = (function () {
                function NavbarComponent(_router, _shoppingService) {
                    this._router = _router;
                    this._shoppingService = _shoppingService;
                }
                NavbarComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    /* this._shoppingService.userBasketObservable$.subscribe(resp =>{
                         console.log(resp +"updated value .....");
                     },error	=>	console.log(error),  ()	=>	{console.log("completed..")});
                    */
                    this._shoppingService.userBasketObservable$.subscribe(function (resp) {
                        _this._guidePrice = resp.guidePrice;
                        // console.log("response");
                        // console.log(resp);
                    });
                    this._shoppingService.intialise();
                    this._menuList = [{
                            id: 1,
                            name: "FreshFruits",
                            type: "parent",
                            childs: [
                                {
                                    id: 2,
                                    name: "All Fruits",
                                    type: "child"
                                },
                                {
                                    id: 3,
                                    name: "Apples",
                                    type: "child"
                                },
                                {
                                    id: 4,
                                    name: "Banana",
                                    type: "child"
                                },
                                {
                                    id: 5,
                                    name: "Grapes",
                                    type: "child"
                                }
                            ]
                        }];
                    console.log(this._menuList);
                };
                NavbarComponent.prototype.onMenuClick = function () {
                    //  console.log("menu is clickeddd");
                };
                NavbarComponent.prototype.routeActive = function (name) {
                    var instruction = this._router.generate(name);
                    return this._router.isRouteActive(instruction);
                };
                ;
                NavbarComponent = __decorate([
                    core_1.Component({
                        selector: 'navbar',
                        templateUrl: './app/templates/navbar.template.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, shopping_service_1.ShoppingService])
                ], NavbarComponent);
                return NavbarComponent;
            }());
            exports_1("NavbarComponent", NavbarComponent);
        }
    }
});
//# sourceMappingURL=navbar.component.js.map