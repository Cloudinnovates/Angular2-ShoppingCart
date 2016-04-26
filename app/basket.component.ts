import {Component,OnInit} from 'angular2/core';
import {ShoppingService} from './services/shopping.service';
import {ItemComponent} from './shared/item.component';
@Component({
    selector :'basket',
    templateUrl:'./app/templates/basket.template.html',
    directives:[ItemComponent]
})
export class BasketComponent implements OnInit {
    private _itemsList;
    private _guidePrice;
    
    constructor(private _shoppingService : ShoppingService){
        
    }
    
    ngOnInit(){
         this._shoppingService.userBasketObservable$.subscribe(resp => {
             this._itemsList = resp.basketItems;
             this._guidePrice = resp.guidePrice;
            }
          );
         this._shoppingService.intialise();       
    }
    
    
}