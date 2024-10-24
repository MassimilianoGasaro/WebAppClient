import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginDto, UserLogin } from '../../interfaces/user';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { Router } from '@angular/router';
import { animate, state, style, transition } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToolbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  animations: [
    // state(
    //   'open',
    //   style({
    //     height: '200px',
    //     opacity: 1,
    //     backgroundColor: 'yellow',
    //   }),
    // ),
    // state(
    //   'closed',
    //   style({
    //     height: '100px',
    //     opacity: 0.8,
    //     backgroundColor: 'blue',
    //   }),
    // ),
    // transition('open => closed', [animate('1s')]),
    // transition('closed => open', [animate('0.5s')]),
  ]
})
export class LoginComponent {

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) {}

  loginForm: FormGroup = this.formBuilder.nonNullable.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })

  ngOnInit(): void {
  }

  cancel() {
    this.loginForm.reset();
    this.router.navigate(["homepage"]);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      let regDto: LoginDto = this.loginForm.value;
      this.login(regDto);
    }
  }

  // PRIVATE METHODS

  private login(model: LoginDto) {
    this.authService.login(model).subscribe({
      next: (user: UserLogin) => {
        this.router.navigate(["homepage"]);
      },
      error: err => {
        console.error(err);
        this.toastr.error(err.error);
      }
    })
  }

}
