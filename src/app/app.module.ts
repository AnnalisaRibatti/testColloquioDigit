import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftRailComponent } from './components/left-rail/left-rail.component';
import { SelectedImageComponent } from './components/selected-image/selected-image.component';
import { ThumbnailsImagesComponent } from './components/thumbnails-images/thumbnails-images.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LeftRailComponent,
    SelectedImageComponent,
    ThumbnailsImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
