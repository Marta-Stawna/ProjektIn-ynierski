import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ReservationComponent } from './reservation/reservation.component';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService} from './auth/auth-guard.service';
import { MyGroupsComponent } from './my-groups/my-groups.component';
import { NewGroupComponent } from './new-group/new-group.component';
import { SearchGroupComponent } from './search-group/search-group.component';
import { AdminComponent } from './my-groups/admin/admin.component';
import { AddToGroupComponent } from './search-group/add-to-group/add-to-group.component';
import { AdminListComponent } from './my-groups/admin-list/admin-list.component';
import { AboutComponent } from './about/about.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: AboutComponent, canActivate: [AuthGuardService] },
  { path: 'plan', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'edit', component: EditComponent, canActivate: [AuthGuardService] },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuardService] },
  { path: 'reservation', component: ReservationComponent, canActivate: [AuthGuardService] },
  { path: 'my-groups/admin/:id', component: AdminComponent, canActivate: [AuthGuardService] },
  { path: 'my-groups/admin', component: AdminListComponent, canActivate: [AuthGuardService] },
  { path: 'my-groups', component: MyGroupsComponent, canActivate: [AuthGuardService] },
  { path: 'new-group', component: NewGroupComponent, canActivate: [AuthGuardService] },
  { path: 'search-group', component: SearchGroupComponent, canActivate: [AuthGuardService] },
  { path: 'search-group/:id', component: AddToGroupComponent, canActivate: [AuthGuardService] }
];
