import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/services/basket.service';
import { ToastrService } from 'ngx-toastr';
import { Basket } from 'src/app/models/basket';
import { BasketProduct } from 'src/app/models/basketProduct';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basket: Basket={}
  product: BasketProduct[] = [];

  productName = "Ürün Adı";
  productPrice = "Fiyat";
  quantity = "Miktar";
  TotalPrice = "Toplam Fiyat";
  TotalQuantity = "Toplam Miktar";


  constructor(
    private basketService: BasketService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {

    this.product = this.basketService.getBasket();
  }

  removeT(product: BasketProduct) {
    this.basketService.remove(product)
  }
  ngDoCheck() {
    this.basket.totalPrice = this.product.reduce((a, b) => a + b.quantity * b.price, 0);
    this.basket.totalQuantity = this.product.reduce((a, b) => a + b.quantity, 0);
  }
  clear(product: BasketProduct){
    this.basketService.clear(product)
  }
}
