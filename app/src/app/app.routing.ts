import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';

import { HomeComponent } from './home/home.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { SubjectDetailComponent } from './subject/subject-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/materias',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'materias',
        component: SubjectListComponent,
      },
      {
        path: 'materia/:id',
        component: SubjectDetailComponent,
      },
      {
        path: 'perfil',
        component: ProfileComponent,
        canActivate: [AuthGuard],
      }
    ]
  },
  {
    path: 'login',
    redirectTo: 'login/ingresa',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path: 'ingresa',
        component: SignInComponent
      },
      {
        path: 'registrate',
        component: SignUpComponent
      },
    ]
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
