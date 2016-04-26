import {Component,OnInit} from 'angular2/core';
import {ShoppingService} from './services/shopping.service';
import {ItemComponent} from './shared/item.component';
@Component({
    selector :'saved-list',
    templateUrl:'./app/templates/savedList.template.html',
    directives:[ItemComponent]
})
export class SavedListComponent implements OnInit {
    private _itemsList;
    constructor (private _shoppingService : ShoppingService){
        
    }
    
    ngOnInit(){
         this._shoppingService.userBasketObservable$.subscribe(resp => {
             this._itemsList = resp.savedListItems;
             console.log("response");
             console.log(this._itemsList);
            }
          );
          
         this._shoppingService.intialise();       
    }
    
}