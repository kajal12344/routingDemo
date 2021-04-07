import { Router } from '@angular/router';
import { DepartmentListComponent } from './../department-list/department-list.component';
import { LoginVerificationService } from './../login-verification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `

<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {font-family: Arial, Helvetica, sans-serif;}
form {border: 3px solid #f1f1f1;}

input[type=text], input[type=password] {
  width: 30%;
  padding: 12px 20px;
  margin: 8px 0;
  margin-left: 20px;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 20%;
}

button:hover {
  opacity: 0.8;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 20%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

</style>
</head>

<h2>Login Form</h2>

<!-- <form #loginForm (ngSubmit)="Login(loginForm)" class="container" role="form" method="post">
  <div class="imgcontainer">
    -->
  <form #myForm method="POST">
    <div>
    <img src="/assets/images/img_avatar2.png" alt="Avatar" class="avatar">
  </div>

   <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required><br><br>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required><br><br>

    <button (click)=Login() class="btn">Login</button><br>

  `,
  styles: [
  ]
})

export class LoginComponent implements OnInit {

 public credentials = [];
  constructor(private loginService : LoginVerificationService, private router :Router) { }

  ngOnInit() {
  }

  Login(){
    this.loginService.getCredentials().subscribe(data => this.credentials = data);
       window.alert("Login Successful");
       this.router.navigate(['/department']);

      // this.router.navigate[('home')];
    }
}
