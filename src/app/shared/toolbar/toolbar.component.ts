import { Component, OutputEmitterRef, inject, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

  authService = inject(AuthService);

  logout() {
    this.authService.logout();
  }
}
