import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';

@Injectable ()

export class ShoppingService  {
    _basketValue =0;
    userBasketObservable$: Observable<any>;
    private _userBasketObserver: Observer<any>;
    private _basketItems    : Array<Object>;
    private _shoppingItems  : Array<Object>;
    private _savedListItems : Array<Object>;

    constructor(private _http :Http){
         this._basketItems = [];
         this._savedListItems = [];
        // Create Observable Stream to output our data
        this.userBasketObservable$ = new Observable(observer =>  this._userBasketObserver = observer).share();
        
        this._shoppingItems = [
            {
                id:1,
                name:"Gala Apples",
                type:"apples",
                image:"Apples_1.jpg",
                priceperunit:"2.50/kg",
                price:260,
                quantity:0
            },
            {
                id:2,
                name:"Granny Apples",
                type:"apples",
                image:"Apples_2.jpg",
                priceperunit:"2.00/kg",
                price:200,
                quantity:0
            },
             {
                id:3,
                name:"Rose Apples",
                type:"apples",
                image:"Apples_3.jpg",
                priceperunit:"3.00/kg",
                price:300,
                quantity:0
            },
             {
                id:4,
                name:"Red Grapes",
                type:"grapes",
                image:"Grapes_1.jpg",
                priceperunit:"3.00/kg",
                price:300,
                quantity:0
            },
             {
                id:5,
                name:"Red Grapes",
                type:"grapes",
                image:"Grapes_2.jpg",
                priceperunit:"3.00/kg",
                price:300,
                quantity:0
            },
              {
                id:6,
                name:"Value Banana",
                type:"bananas",
                image:"Banana_1.jpg",
                priceperunit:"1.00/kg",
                price:100,
                quantity:0
            },
            {
                id:7,
                name:"Fair Trade Banana",
                type:"bananas",
                image:"Banana_2.jpg",
                priceperunit:"1.20/kg",
                price:120,
                quantity:0
            },
            
            
        ];
        
    }
    
    intialise(){
       // this._http.get(this._url).map(res =>res.json()).subscribe(res =>{ this._userBasketObserver.next(res);});
        this._userBasketObserver.next({guidePrice:this._basketValue, basketItems:this._basketItems, savedListItems:this._savedListItems} );
    }
      
    addItemtoBasket(item){
        this._basketValue += 1;
         var itemIndex = this._basketItems.indexOf(item);
         if(itemIndex!= -1){
             console.log(this._basketItems[itemIndex]);
             //this._basketItems[itemIndex].quantity = item.quantity;
         }else{
             this._basketItems.push(item);
         }
        // Push the new list of todos into the Observable stream
        this._userBasketObserver.next({guidePrice:this._basketValue, basketItems:this._basketItems,savedListItems:this._savedListItems });
       
    }
    
    deleteItemFromBasket(item){
        this._basketValue-=1; 
        var itemIndex = this._basketItems.indexOf(item);
        if(this._basketItems[itemIndex].quantity == 0){
            this._basketItems.splice(itemIndex,1);
        }
        // Push the new list of todos into the Observable stream
        this._userBasketObserver.next({guidePrice:this._basketValue, basketItems:this._basketItems,savedListItems:this._savedListItems });
       
    }
    
    addItemtoSavedList(item){
         var itemIndex = this._savedListItems.indexOf(item);
         if(itemIndex!= -1){
             console.log(this._savedListItems[itemIndex]);
             //this._basketItems[itemIndex].quantity = item.quantity;
         }else{
             this._savedListItems.push(item);
             console.log("added item to the saved list");
         }
        // Push the new list of todos into the Observable stream
        this._userBasketObserver.next({guidePrice:this._basketValue, basketItems:this._basketItems,savedListItems:this._savedListItems });
    }
    
    updateShoppingItem(){
        
        
    }
    
    getShoppingItemList(){
        
        return this._shoppingItems;
    }
    
    
    
    
   
}