import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thumbnails-images',
  standalone: false,
  templateUrl: './thumbnails-images.component.html',
  styleUrl: './thumbnails-images.component.css'
})
export class ThumbnailsImagesComponent {
  @Input()
  list!: string[]
}
