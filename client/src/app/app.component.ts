import { Component ,OnInit } from '@angular/core';
import { BackendService } from './services/backend.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  response: any;
  title = 'Fitness Center App';
  constructor(private backendService: BackendService,
    private afAuth: AngularFireAuth,
    private router: Router
     ) {}

  ngOnInit(): void {
    this.backendService.callExpress().subscribe(
      (response) => {
        this.response = response;
        console.log('Response from Express:', response);
      },
      (error) => {
        console.error('Error calling Express:', error);
      }
    );
  }
}
