import {Component,OnInit} from 'angular2/core';
import {ItemComponent} from './item.component';
import {ShoppingService} from './shopping.service';
@Component({
    selector :'shopping',
    templateUrl:'./app/templates/shopping.template.html',
    directives:[ItemComponent]
})
export class ShoppingComponent implements OnInit{
    private _itemList;
    constructor(private _shoppingService : ShoppingService){
        
    }
      ngOnInit(){
        this._itemList =this._shoppingService.getShoppingItemList();
      }
}
