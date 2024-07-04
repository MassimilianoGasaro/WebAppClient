import { Component, OutputEmitterRef, output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  toggleRegisterButton: OutputEmitterRef<boolean> = output<boolean>();

  isRegister: boolean = false;

  toggleIsRegister() {
    this.toggleRegisterButton.emit(!this.isRegister);
    this.isRegister = !this.isRegister;
  }
}
