import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';

@Injectable ()

export class ShoppingService  {
    
    userBasketObservable$: Observable<any>;
    itemSavedObservable$: Observable<any>;
    private _basketTotalItems = 0;
    private _itemSavedObserver: Observer<any>;
    private _userBasketObserver: Observer<any>;
    private _basketItems    : Array<Object>;
    private _shoppingItems  : Array<Object>;
    private _savedListItems : Array<Object>;

    constructor(private _http :Http){
         this._basketItems = [];
         this._savedListItems = [];
        // Create Observable Stream to output our data
        this.userBasketObservable$ = new Observable(observer =>  this._userBasketObserver = observer).share();
        this.itemSavedObservable$ = new Observable(observer =>  this._itemSavedObserver = observer).share();
        
        this._shoppingItems = [
            {
                id:1,
                name:"Gala Apples",
                type:"apples",
                image:"Apples_1.jpg",
                priceperunit:250,
                price:260,
                quantity:0
            },
            {
                id:2,
                name:"Granny Apples",
                type:"apples",
                image:"Apples_2.jpg",
                priceperunit:200,
                price:200,
                quantity:0
            },
             {
                id:3,
                name:"Rose Apples",
                type:"apples",
                image:"Apples_3.jpg",
                priceperunit:300,
                price:300,
                quantity:0
            },
             {
                id:4,
                name:"Red Grapes",
                type:"grapes",
                image:"Grapes_1.jpg",
                priceperunit:300,
                price:300,
                quantity:0
            },
             {
                id:5,
                name:"Red Grapes",
                type:"grapes",
                image:"Grapes_2.jpg",
                priceperunit:300,
                price:300,
                quantity:0
            },
              {
                id:6,
                name:"Value Banana",
                type:"bananas",
                image:"Banana_1.jpg",
                priceperunit:100,
                price:100,
                quantity:0
            },
            {
                id:7,
                name:"Fair Trade Banana",
                type:"bananas",
                image:"Banana_2.jpg",
                priceperunit:120,
                price:120,
                quantity:0
            },
            
            
        ];
        
    }
    
    intialise(){
        this._userBasketObserver.next({totalBasketItems:this._basketTotalItems, basketItems:this._basketItems ,guidePrice:this.calculateBasketGuidePrice(), savedListItems:this._savedListItems} );
    }
      
    addItemtoBasket(item){
        this._basketTotalItems += 1;
         var itemIndex = this._basketItems.indexOf(item);
         if(itemIndex == -1){
            this._basketItems.push(item);
         }
        // Push the new list of todos into the Observable stream
        this._userBasketObserver.next({totalBasketItems:this._basketTotalItems, guidePrice:this.calculateBasketGuidePrice(), basketItems:this._basketItems,savedListItems:this._savedListItems });
       
    }
    
    deleteItemFromBasket(item){
        this._basketTotalItems-=1; 
        var itemIndex = this._basketItems.indexOf(item);
        if(this._basketItems[itemIndex].quantity == 0){
            this._basketItems.splice(itemIndex,1);
        }
        // Push the new list of todos into the Observable stream
        this._userBasketObserver.next({totalBasketItems:this._basketTotalItems,guidePrice:this.calculateBasketGuidePrice(), basketItems:this._basketItems,savedListItems:this._savedListItems });
       
    }
    
    addItemtoSavedList(item){
         var itemIndex = this._savedListItems.indexOf(item);
         if(itemIndex == -1){
              this._savedListItems.push(item);
         }
        // Push the new list of todos into the Observable stream
        this._userBasketObserver.next({totalBasketItems:this._basketTotalItems,guidePrice:this.calculateBasketGuidePrice(), basketItems:this._basketItems,savedListItems:this._savedListItems });
    }
       
    getShoppingItemList(){
        return this._shoppingItems;
    }
    
    calculateBasketGuidePrice(){
        var totalValue = 0;
        console.log(this._basketItems.length);
        for( var item of this._basketItems){
             console.log( item );
            console.log( item.quantity );
             console.log( item.price );
            totalValue += item.quantity * item.price;
        }
        console.log("......................totalValue........................");
        console.log(totalValue);
       return  totalValue;
    }
    
    
    
   
}