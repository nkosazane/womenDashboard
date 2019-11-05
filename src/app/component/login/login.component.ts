import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  signInWithEmail(){
    this.authService.signInRegular(this.user.email, this.user.password).then((res) => {
      console.log(res);
      this.router.navigate(['/dashboard']);
    })
    .catch((err) => console.log('error:' + err));
  }

  ngOnInit() {
  }

}
