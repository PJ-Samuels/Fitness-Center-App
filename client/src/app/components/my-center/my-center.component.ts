import { Component, NgModule } from '@angular/core';
import {Info} from './info';
import { FormsModule } from '@angular/forms';
import { BackendService } from '../../services/backend.service';
@Component({
  selector: 'app-my-center',
  templateUrl: './my-center.component.html',
  styleUrls: ['./my-center.component.css']
})

export class MyCenterComponent {
  constructor(private backend: BackendService) { }
  info: Info = {
    id: 1,
    name: 'Fitness Center',
    address: "1234 Main St",
    phone: "123-456-7890",
    summary: "This is a summary",
    hours: "9-5",
  };

    onSubmit() {
      // Handle form submission here, e.g., send the user data to an API
      this.backend.callExpressTest().subscribe((data: any) => {
        console.log(data);
      });
      console.log(this.info);
    }
}

