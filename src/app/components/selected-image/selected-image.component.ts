import { Component, Input } from '@angular/core';
import { Image } from '../../models/pexelsResponse';

@Component({
  selector: 'app-selected-image',
  standalone: false,
  templateUrl: './selected-image.component.html',
  styleUrl: './selected-image.component.css'
})
export class SelectedImageComponent {
  @Input()
  image!: Image
}
