System.register(['angular2/core', 'angular2/router', './navbar.component', './shopping.component', './basket.component', './savedList.component', './mainpage.component'], function(exports_1, context_1) {
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
    var core_1, router_1, navbar_component_1, shopping_component_1, basket_component_1, savedList_component_1, mainpage_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (shopping_component_1_1) {
                shopping_component_1 = shopping_component_1_1;
            },
            function (basket_component_1_1) {
                basket_component_1 = basket_component_1_1;
            },
            function (savedList_component_1_1) {
                savedList_component_1 = savedList_component_1_1;
            },
            function (mainpage_component_1_1) {
                mainpage_component_1 = mainpage_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/shopping', name: 'Shopping', component: shopping_component_1.ShoppingComponent },
                        { path: '/basket', name: 'Basket', component: basket_component_1.BasketComponent },
                        { path: '/savedlist', name: 'SavedList', component: savedList_component_1.SavedListComponent },
                        { path: '/mainpage', name: 'MainPage', component: mainpage_component_1.MainPageComponent, useAsDefault: true },
                        { path: '/*other', name: 'Other', redirectTo: ['MainPage'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: '<navbar> </navbar><router-outlet></router-outlet>',
                        directives: [router_1.RouterOutlet, navbar_component_1.NavbarComponent, shopping_component_1.ShoppingComponent, basket_component_1.BasketComponent, savedList_component_1.SavedListComponent, mainpage_component_1.MainPageComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map