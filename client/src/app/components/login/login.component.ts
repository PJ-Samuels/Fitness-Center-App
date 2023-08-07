import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  constructor(public formBuilder: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router
    ) {}
  async loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    //await this.afAuth.signInWithPopup(provider);
    try {
      await this.afAuth.signInWithPopup(provider).then((result) => {
        this.router.navigate(['dashboard']);
        console.log("User logged in", result.user)
      });
    } catch (error) {
      console.error('Google sign-in error:', error);
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
  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     console.log(this.loginForm.value);
  //   }
  // }
  
  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        console.log("user logged in")// User is logged in
      } else {
        // User is not logged in
      }
    });
    this.loginForm = this.formBuilder.group({
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

}
