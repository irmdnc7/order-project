import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasketProduct } from 'src/app/models/basketProduct';
import { Basket } from 'src/app/models/basket';



@Injectable({
  providedIn: 'root'
})

export class BasketService {


  path = "https://localhost:3000/api/baskets/";

  basket: Basket = {
    product: [],
    totalQuantity: 0,
    totalPrice: 0
  };

  constructor(private httpClient: HttpClient) { }

  getBasket(): Basket[] {
    return this.basket.product;
  }

  addToBasket(product: BasketProduct) {
    let productExists = false;
    for (let i in this.basket.product) {
      if (this.basket.product[i].id === product.id) {
        this.basket.product[i].quantity += +1;
        product.totalPrice = product.quantity * product.price || 0;
        productExists = true
        break;
      }
    }
    if (!productExists) {
      product.totalPrice = +product.price
      product.quantity = 1
      this.basket.product?.push(product);
    }
  }

  remove(product: BasketProduct) {
    let productExists = false;
    for (let i in this.basket.product) {
      if (this.basket.product[i].id === product.id) {
        if (this.basket.product[i].quantity > 0) {
          this.basket.product[i].quantity--;
          product.totalPrice = product.quantity * product.price;
          productExists = true
          break;

        }
        if (this.basket.product[i].quantity <1 ) {
          this.basket.product?.splice(this.basket.product?.indexOf(product))
        }
      }
    }
  }
  clear(product:BasketProduct){
    this.basket.product?.splice(this.basket.product?.indexOf(product))
  }

  // addToBasket(product: BasketProduct) {
  //   if (basketProduct) {
  //     basketProduct.quantity++;
  //     basketProduct.totalPrice = product.price || 0;
  //   } else {
  //     if (!this.basket.product) {
  //       this.basket.product = [];
  //       basketProduct.quantity = 1;
  //     }
  //     this.basket.product?.push(product);
  //   }
  // }
  //   removeFromBasket(product: BasketProduct) {
  //     let basketProduct = this.basket.product?.find(q => q.id === product.id)
  //     if (basketProduct) {
  //       if (basketProduct.quantity > 1) {
  //         basketProduct.quantity--;
  //       }
  //       else {
  //         basketProduct.quantity = 0;
  //         this.basket.product.splice(this.basket.product.indexOf(basketProduct),1)
  //       }
  //     }
  //   }
  // }
  // addToBasket(product: BasketProduct) {
  //   let productExists = false;
  //   for (let i in this.basket.product) {
  //     if (this.basket.product[i].id === product.id) {
  //       this.basket.product[i].quantity += +1;
  //       product.totalPrice = product.quantity * product.price || 0;
  //       productExists = true
  //       break;
  //     } else {
  //     }
  //   }
  //   if (!productExists) {
  //     product.totalPrice = +product.price
  //     product.quantity = 1
  //     this.basket.product?.push(product);
  //   }
  // }


}



