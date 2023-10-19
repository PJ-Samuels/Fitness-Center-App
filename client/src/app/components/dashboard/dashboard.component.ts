import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  items: string[] = [];
  locations: any[] = [];
  constructor(
    private backendService: BackendService,
  ) {}

  ngOnInit(): void {
    const user_data = sessionStorage.getItem("user_data");
    sessionStorage.setItem("user_data", user_data || "");
    this.items = ['Item 1', 'Item 2', 'Item 3'];
    this.backendService.getLocations().subscribe(
      (response)=>{
        console.log("locations", response)
        this.locations = response;
      }
    );
  }
}
