import { Component } from '@angular/core';
import { createUserDto } from 'src/app/dto/createUserDto';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(public authService:AuthService){}

  register: createUserDto = new createUserDto;

  onSubmit() {
    this.authService.register(this.register).subscribe((ret)=>{console.log(ret)})
  }
}
