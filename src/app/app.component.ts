import { Component } from '@angular/core';
import { ApiPexelsService } from './services/api-pexels.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testColloquioDigit';

  constructor(private apiPexelsService: ApiPexelsService) {}

  ngOnInit(): void {
    this.apiPexelsService.getImage().subscribe(response => {
      console.log(response);
    });
  }
}
