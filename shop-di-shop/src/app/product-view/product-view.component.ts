import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductCartService } from '../Services/product-cart.service';
import { COLORS } from '../Moduls/mock-colors';
import { PRODUCTS } from '../Moduls/mock-products';
import { Color } from '../Moduls/color';

import { ProductService } from '../Services/product.service';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../Moduls/product';


@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  colors = COLORS;
  products = PRODUCTS;

  product: Product;
  selectedColor: Color;

  imageLink = "https://thumb.tildacdn.com/tild3634-6235-4061-a634-333161313262/-/resize/560x/-/format/webp/2.jpg";

  constructor(
    private route: ActivatedRoute,
    private productCartService: ProductCartService, 
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct(); 
  }

  addToCart(product, color, price) {
    this.productCartService.addToCart(product, color, price);
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }

}
