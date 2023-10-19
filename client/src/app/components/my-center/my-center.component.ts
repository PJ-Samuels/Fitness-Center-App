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
  constructor(private backendService: BackendService) { }
  info: Info = {
    name: 'Fitness Center',
    address: "1234 Main St",
    phone: "123-456-7890",
    summary: "This is a summary",
    image: "str",
    hours: "9-5",
  };
  selectedFile!: File | null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  ngOnInit(): void {
    
    sessionStorage.getItem("user_data");
    const user_data = sessionStorage.getItem("user_data");
    const uid = JSON.parse(user_data || "").id;


    this.backendService.getUserCenterData(uid).subscribe( (data:any)=>{
      console.log(data);
      this.info.name = data.name;
      this.info.address = data.address;
      this.info.phone = data.phone;
      this.info.summary = data.summary;
    });
  }

    onSubmit() {
      // Handle form submission here, e.g., send the user data to an API
      sessionStorage.getItem("user_data");
      const user_data = sessionStorage.getItem("user_data");
      const uid = JSON.parse(user_data || "").id;
      const sent_data = {
        uid: uid,
        name: this.info.name,
        address: this.info.address,
        phone: this.info.phone,
        summary: this.info.summary,
      }
      this.backendService.centerInfoUpdate(sent_data).subscribe((data: any) => {
        console.log(data);
      });
      console.log(this.info);
    }
}

