import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RegisterComponent } from './shared/register/register.component';
import { LoginComponent } from './shared/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '',   redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent, title: 'Homepage' },
  { path: '', runGuardsAndResolvers: "always", canActivate: [authGuard], children: [
    { path: 'dashboard', component: DashboardComponent, title: 'Dashboard' },
  ]},
  { path: 'settings', component: SettingsComponent, title: 'Settings' },
  { path: 'register', component: RegisterComponent, title: 'Register' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: '**', component: NotFoundComponent },  // Wildcard route for a 404 page
];
