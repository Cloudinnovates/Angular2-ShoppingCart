import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {NavbarComponent} from './navbar.component';
import {ShoppingComponent} from './shopping.component';
import {BasketComponent} from './basket.component';
import {SavedListComponent} from './savedList.component';
import {MainPageComponent} from './mainpage.component';
@RouteConfig([
    {path :'/shopping',name:'Shopping', component:ShoppingComponent},
    {path:'/basket', name:'Basket', component:BasketComponent},
    {path:'/savedlist',name:'SavedList',component:SavedListComponent},
    {path:'/mainpage',name:'MainPage',component:MainPageComponent,useAsDefault:true},
    {path:'/*other', name:'Other',redirectTo:['MainPage']}    
])

@Component({
    selector: 'my-app',
    template: '<navbar> </navbar><router-outlet></router-outlet>',
    directives:[RouterOutlet,NavbarComponent,ShoppingComponent,BasketComponent,SavedListComponent,MainPageComponent]
})
export class AppComponent { }