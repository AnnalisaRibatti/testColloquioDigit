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

  constructor(private apiPexelsService: ApiPexelsService) {}

  ngOnInit(): void {
    this.apiPexelsService.getImage().subscribe( (response: PexelsResponse) => {
      console.log(response);
      this.selectedImage = response.photos[0]
    });
  }
}
