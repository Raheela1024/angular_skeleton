import { Component } from '@angular/core';
import {RouterModule,RouterOutlet} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from "./shared/header/header.component";
import {MatButton} from "@angular/material/button";
import {DeferredComponentComponent} from './deferred-component/deferred-component.component';
import {NgComponentOutlet, NgIf} from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MatButton, NgIf, HttpClientModule, RouterModule, NgComponentOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-skeleton';
  showDeferredComponent = false;
  deferredComponent = DeferredComponentComponent;
  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit() {

  }

  loadDeferredComponent() {
    setTimeout(() => {
      this.showDeferredComponent = true;
    }, 3000);
  }

  navigateToOther() {
    this.router.navigate(['/image']);
  }

  fetchData() {
    this.http.get('https://portal.aquaticsymbiosisgenomics.org/api/statuses/filters').subscribe(() => {
      this.showDeferredComponent = true;
    });
  }
}
