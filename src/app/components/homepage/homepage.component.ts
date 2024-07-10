import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../../shared/register/register.component';
import { ToolbarComponent } from '../../shared/toolbar/toolbar.component';
import { LoginComponent } from '../../shared/login/login.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RegisterComponent, ToolbarComponent, LoginComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
}
