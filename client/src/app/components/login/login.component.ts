import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  constructor(public formBuilder: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private backendService: BackendService,
    ) {}
  async loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await this.afAuth.signInWithPopup(provider)
    let user = result.user?.displayName;
    if(user){
      this.router.navigate(['dashboard']);
      console.log("User logged in", result.user?.displayName)
      this.backendService.callExpress2(user).subscribe(
        (response) => {
          console.log('Response from Express:', response);
        }
      );
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      console.log('User logged out');
    } catch (error) {
      console.error('Logout error:', error);
    }
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
  
  ngOnInit(): void {
    // this.afAuth.authState.subscribe(user => {
    //   if (user) {
    //     console.log("user logged in")
    //   } else {
    //     console.log("user logged out")
    //   }
    // });
    this.loginForm = this.formBuilder.group({
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

}
