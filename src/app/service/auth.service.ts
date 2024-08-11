import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginDto } from '../dto/loginDto';
import { createUserDto } from '../dto/createUserDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  baseURL = "https://interview.t-alpha.com.br/api/auth/";

  login(data: loginDto): Observable<loginDto> {
    return this.http.post<loginDto>(this.baseURL + 'login', data);
  }

  register(data: createUserDto): Observable<createUserDto>{
    return this.http.post<createUserDto>(this.baseURL + 'register', data);
  }
}
