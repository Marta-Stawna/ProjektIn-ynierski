import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ReservationComponent } from './reservation/reservation.component';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'edit',      component: EditComponent },
  { path: 'search',      component: SearchComponent },
  { path: 'reservation',      component: ReservationComponent }
];