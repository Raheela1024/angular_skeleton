import { Component } from '@angular/core';
import {IMAGE_CONFIG, IMAGE_LOADER, ImageLoaderConfig, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-ng-image-example',
  standalone: true,
  imports: [NgOptimizedImage],
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        breakpoints: [380, 640, 1200, 1920, 2048, 3840]
      }
    },
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        return `https://cdn-images-1.medium.com/max/${config.width}/${config.src}`;
      },
    },
],
    templateUrl: './ng-image-example.component.html',
  styleUrl: './ng-image-example.component.css'
})
export class NgImageExampleComponent {

}
