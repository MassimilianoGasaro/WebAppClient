import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';

export const routes: Routes = [
  { path: 'homepage', component: HomepageComponent, title: 'Homepage' },
  { path: 'dashboard', component: DashboardComponent, title: 'Homepage' },
  { path: 'settings', component: SettingsComponent, title: 'Homepage' },
  { path: '',   redirectTo: '/homepage', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },  // Wildcard route for a 404 page
];
