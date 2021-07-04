import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { PRODUCTS } from '../Moduls/mock-products';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.scss']
})
export class ProductsViewComponent implements OnInit {

  products = PRODUCTS;

  constructor(breakpointObserver: BreakpointObserver) {
    
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {

        console.log("layout changed", result);

        // this.activateHandsetLayout();
      }
    });
   }

  ngOnInit(): void {
  }

}
