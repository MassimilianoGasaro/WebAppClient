import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './shared/loader/loader.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AuthService } from './services/auth.service';
import { UserLogin } from './interfaces/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent, ToolbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private authService = inject(AuthService);
  title = 'dashboard';

  ngOnInit(): void {
    this.setCurrentUser();
  }

  private setCurrentUser() {
    const userString: string | null = localStorage.getItem("user");
    if (!userString) return;
    const user: UserLogin = JSON.parse(userString);
    this.authService.currentUserSource.set(user);
  }
}
