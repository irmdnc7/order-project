import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/services/basket.service';
import { ProductService } from 'src/app/services/services/product.service';
import { BasketProduct } from 'src/app/models/basketProduct';
import { Basket } from 'src/app/models/basket';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  product: BasketProduct[] = [];
  basket: Basket = {}

  filterText=""


  constructor(
    private productService: ProductService,
    private basketService: BasketService,
    private toastrService: ToastrService

  ) { }

  ngOnInit(): void {
    this.getBasketProduct();
  }

  addToBasket(product: BasketProduct) {
    this.basketService.addToBasket(product);
    this.toastrService.success("Sepete Eklendi.", product?.name);
  }


  removeTo(product: BasketProduct) {
    this.basketService.remove(product)
  }


  getBasketProduct() {
    this.productService.getProducts().subscribe(response => {
      this.product = response;
    })
  }

}




