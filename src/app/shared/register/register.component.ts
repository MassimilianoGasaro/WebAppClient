import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RegisterDto, UserLogin } from '../../interfaces/user';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToolbarComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router) {}

  registerForm: FormGroup = this.formBuilder.nonNullable.group({
    userName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), this.passwordValidator]],
    confirmPassword: ['', [Validators.required]],
  }, { validators: this.matchPasswords('password', 'confirmPassword') })

  ngOnInit(): void {
  }

  cancel() {
    this.registerForm.reset();
  }

  onSubmit() {
    if (this.registerForm.valid) {
      let regDto: RegisterDto = this.registerForm.value;
      this.register(regDto);
    }
  }

  // PRIVATE METHODS

  private register(model: RegisterDto) {
    this.authService.register(model).subscribe({
      next: (user: UserLogin) => {
        this.toastr.success(`${user.userName} registrato con successo!`);
        this.router.navigate(["homepage"]);
      },
      error: err => {
        console.error(err);
        this.toastr.error(err.error);
      }
    })
  }

  private passwordValidator(control: AbstractControl): ValidationErrors | null {
    const password: string = control.value;
    if (!password) return null;

    const hasUpperCase: boolean = /[A-Z]/.test(password);
    const hasLowerCase: boolean = /[a-z]/.test(password);
    const hasSpecialChar: boolean = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const valid = hasUpperCase && hasLowerCase && hasSpecialChar;
    return valid ? null : { passwordInvalid: true };
  }

  private matchPasswords(password: string, confirmPassword: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const passwordControl = formGroup.get(password);
      const confirmPasswordControl = formGroup.get(confirmPassword);

      if (!passwordControl || !confirmPasswordControl) return null;

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMismatch']) return null;

      if (passwordControl.value !== confirmPasswordControl.value) confirmPasswordControl.setErrors({ passwordMismatch: true });
      else confirmPasswordControl.setErrors(null);

      return null;
    };
  }
}
