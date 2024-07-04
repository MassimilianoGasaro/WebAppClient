import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../../shared/register/register.component';
import { ToolbarComponent } from '../../shared/toolbar/toolbar.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RegisterComponent, ToolbarComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{
  isRegister: boolean = false;

  toggleIsRegister(event: boolean) {
    this.isRegister = event;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
