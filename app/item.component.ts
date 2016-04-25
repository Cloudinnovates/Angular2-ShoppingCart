import {Component, Input,OnInit} from 'angular2/core';
import {QuantityWidgetComponent} from './quantity.widget.component';
import {SaveListIconComponent} from './savelisticon.component';
import {ShoppingService} from './shopping.service';
//import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector:"item",
    templateUrl:'./app/templates/item.template.html',
     styles: [`
       .priceperkg {
            left: 0px;
            position: relative;
            display: inline-table;
        }

        .price {
            /* display: inline-table; */
            position: relative;
            right: 2%;
            float: right;
        }
        quantity-widget {
            float: right;
       }
       save-list-icon {
           font-size:15px;
           float:left;   
       }
       
   `],
   
   directives:[QuantityWidgetComponent, SaveListIconComponent]
  // providers:[ShoppingService,HTTP_PROVIDERS]  
})

export class ItemComponent implements OnInit {
    
    @Input() private _item;
    
  constructor(private _shoppingService :ShoppingService){
     
  };
  
   ngOnInit(){
       // console.log(this._item);
   }
   
   addItem($event){ 
      // console.log("add this item....");
       this._item.quantity = $event.quantity;
       this._shoppingService.addItemtoBasket(this._item);
   }
   
   deleteItem($event){ 
      // console.log("delete this item....");
       this._item.quantity = $event.quantity;
       this._shoppingService.deleteItemFromBasket(this._item);
   }
   
   saveItem(){
       console.log(" save item to list");
       this._shoppingService.addItemtoSavedList(this._item);
   }
  
    
}
