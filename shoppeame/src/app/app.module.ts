import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ItemComponent } from './shared/components/item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormPageComponent,
    HomePageComponent,
    ProductsPageComponent,
    FooterComponent,
    GalleryComponent,
    HeaderComponent,
    ItemComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
