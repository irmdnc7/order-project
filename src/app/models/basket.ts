import { BasketProduct } from "./basketProduct";

export interface Basket{    
   product?:BasketProduct[];  
   totalQuantity?: number;   
   totalPrice?:number;
      
}