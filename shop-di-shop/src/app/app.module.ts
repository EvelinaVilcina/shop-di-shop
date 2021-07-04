import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCardComponent } from './product-card/product-card.component';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list'
import { ProductsViewComponent } from './products-view/products-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';


import { MatButtonModule } from '@angular/material/button';
import { ProductViewComponent } from './product-view/product-view.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { CartViewComponent } from './cart-view/cart-view.component';

import { MatInputModule } from '@angular/material/input';
 

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductsViewComponent,
    DashboardComponent,
    ProductViewComponent,
    CartViewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    FlexLayoutModule,
    LayoutModule,
    MatRadioModule,
    MatCheckboxModule,
    MatCarouselModule.forRoot(),
    MatDividerModule,
    MatListModule,
    MatInputModule 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
