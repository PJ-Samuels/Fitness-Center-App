import { Component ,OnInit } from '@angular/core';
import { BackendService } from './services/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  response: any;
  title = 'Fitness Center App';
  constructor(private backendService: BackendService,
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
