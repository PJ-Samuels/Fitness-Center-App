import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent {
  constructor(private router: Router){}
  handleCenterClick(){
    console.log("clicked");
    this.router.navigate(['my-center']);
  }
  handleSearchClick(){
    console.log("clicked");
    this.router.navigate(['search']);
  }
}
