import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../Services/product-cart.service';
import { OrderedProduct } from '../Moduls/ordereed-product';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {
  
  itemsInCart;
  
  constructor(
    private productCartService: ProductCartService
  ) { }

  ngOnInit() {
    this.itemsInCart = this.productCartService.getItems();
  }

}
