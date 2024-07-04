import { Injectable, signal } from '@angular/core';
import { HttpApiService } from './httpApi.service';
import { LoginDto, RegisterDto, UserLogin } from '../interfaces/user';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSource = signal<UserLogin | null>(null);

  constructor(private apiService: HttpApiService) { }

  /**
   * login method --> metodo per effettuare il login
   * @param userLogin username e password dell'utente
   * @returns restituisce un Observable di UserLogin, cioè username e token
   */
  public login(userLogin: LoginDto): Observable<UserLogin> {
    return this.apiService.post("auth/Login", userLogin).pipe(
      map((response: UserLogin) => {
        const user: UserLogin = response;
        if(user) this.setCurrentUser(user);
        return user;
      })
    )
  }

  public register(userRegister: RegisterDto): Observable<UserLogin> {
    return this.apiService.post("auth/Login", userLogin).pipe(
      map((response: UserLogin) => {
        const user: UserLogin = response;
        if(user) this.setCurrentUser(user);
        return user;
      })
    )
  }

  public logout() {
    localStorage.removeItem("user");
    this.currentUserSource.set(null);
  }

  // PRIVATE METHODS

  private setCurrentUser(user: UserLogin) {
    localStorage.setItem("user", JSON.stringify(user));
    this.currentUserSource.set(user);
  }

}
