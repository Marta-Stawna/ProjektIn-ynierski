import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ReservationComponent } from './reservation/reservation.component';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService} from './auth/auth-guard.service';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard',  component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'edit',      component: EditComponent, canActivate: [AuthGuardService] },
  { path: 'search',      component: SearchComponent, canActivate: [AuthGuardService] },
  { path: 'reservation',      component: ReservationComponent, canActivate: [AuthGuardService] }
];
