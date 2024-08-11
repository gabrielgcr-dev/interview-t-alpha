import { Component } from '@angular/core';
import { loginDto } from 'src/app/dto/loginDto';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public authService:AuthService){}

  login: loginDto = new loginDto;

  onSubmit() {
    this.authService.login(this.login).subscribe((ret)=>{console.log(ret)})
  }
}
