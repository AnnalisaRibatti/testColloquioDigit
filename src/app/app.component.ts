import { Component } from '@angular/core';
import { ApiPexelsService } from './services/api-pexels.service';
import { Image, PexelsResponse } from './models/pexelsResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testColloquioDigit';

  selectedImage!: Image;
  images!: Image[];
  listImages!: string[]

  constructor(private apiPexelsService: ApiPexelsService) {}

  ngOnInit(): void {
    this.apiPexelsService.getImage().subscribe( (response: PexelsResponse) => {
      console.log(response);
      this.images = response.photos;
      this.selectedImage = response.photos[0]

      this.listImages = this.images.map(photo => photo.alt);
    });
  }
}
