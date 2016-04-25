import {Component,OnInit} from 'angular2/core';
import {Router,ROUTER_DIRECTIVES} from 'angular2/router';
import {ShoppingService} from './shopping.service';
@Component({
    selector:'navbar',
    templateUrl:'./app/templates/navbar.template.html',
   directives:[ROUTER_DIRECTIVES]
  // providers:[]
})

export class NavbarComponent implements OnInit {
    private _menuList;
    private _guidePrice;
    constructor (private _router:Router, private _shoppingService :ShoppingService){
        
    }
    
    ngOnInit(){
       /* this._shoppingService.userBasketObservable$.subscribe(resp =>{
            console.log(resp +"updated value .....");
        },error	=>	console.log(error),  ()	=>	{console.log("completed..")});
       */
         this._shoppingService.userBasketObservable$.subscribe(resp => {
             this._guidePrice  = resp.guidePrice;
            // console.log("response");
            // console.log(resp);
            }
          );
          
         this._shoppingService.intialise();
         
         
        this._menuList =[ {
            id:1,
            name:"FreshFruits",
            type:"parent",
            childs:[
                 {
                        id:2,
                        name:"All Fruits",
                        type:"child" 
                },
                {
                        id:3,
                        name:"Apples",
                        type:"child" 
                },
                    {
                        id:4,
                        name:"Banana",
                        type:"child" 
                },
                    {
                        id:5,
                        name:"Grapes",
                        type:"child" 
                }
                
                ]
                
        }]
        
        console.log(this._menuList);
         
    } 
       
    
    onMenuClick(){
        
      //  console.log("menu is clickeddd");
    }
    
    routeActive(name){
        var instruction = this._router.generate(name);
        return this._router.isRouteActive(instruction );
    };
    
    
    
    
}
