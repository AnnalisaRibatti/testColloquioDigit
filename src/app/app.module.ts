import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftRailComponent } from './left-rail/left-rail.component';
import { SelectedImageComponent } from './selected-image/selected-image.component';
import { ThumbnailsImagesComponent } from './thumbnails-images/thumbnails-images.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftRailComponent,
    SelectedImageComponent,
    ThumbnailsImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
