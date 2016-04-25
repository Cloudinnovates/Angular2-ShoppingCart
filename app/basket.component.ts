import {Component,OnInit} from 'angular2/core';
import {ShoppingService} from './shopping.service';
import {ItemComponent} from './item.component';
@Component({
    selector :'basket',
    templateUrl:'./app/templates/basket.template.html',
    directives:[ItemComponent]
})
export class BasketComponent implements OnInit {
    private _itemsList;
    
    constructor(private _shoppingService : ShoppingService){
        
    }
    
    ngOnInit(){
         this._shoppingService.userBasketObservable$.subscribe(resp => {
             this._itemsList = resp.basketItems;
             console.log("response");
             console.log(this._itemsList);
            }
          );
         this._shoppingService.intialise();       
    }
    
    
}