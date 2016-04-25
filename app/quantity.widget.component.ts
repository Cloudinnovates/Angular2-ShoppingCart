import {Component,Input,Output,EventEmitter} from 'angular2/core';

@Component({
    selector:"quantity-widget",
    templateUrl:'./app/templates/quantitywidget.template.html',
     styles: [`
        .btn-default {
            color: #ffffff;
            background-color: green;
        }
        .disabled{
            color:rgba(0,0,0,0.1);
        }
    
    
    `],   
})

export class QuantityWidgetComponent {
    
    @Input()  _quantity =4;
    @Output() add = new EventEmitter();
     @Output() delete = new EventEmitter();
    
    onAddButtonClick(){
       // console.log("add the item  to the basket");
        this._quantity+=1;
        this.add.emit({quantity:this._quantity});
    }
    
    onMinusButtonClick(){
        // console.log("remove the item  to the basket");
         if(this._quantity!=0 ){
            this._quantity-= 1;
            this.delete.emit({quantity:this._quantity});
         }
    }
    
}
