import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailsImagesComponent } from './thumbnails-images.component';

describe('ThumbnailsImagesComponent', () => {
  let component: ThumbnailsImagesComponent;
  let fixture: ComponentFixture<ThumbnailsImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThumbnailsImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThumbnailsImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
