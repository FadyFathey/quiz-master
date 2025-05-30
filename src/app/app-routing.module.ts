import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component'; // Import the MainLayoutComponent
import { HomeComponent } from './home/home.component'; // Import the HomeComponent
import { RegisterComponent } from './components/register/register.component';
import { QuizComponent } from './components/quiz/quiz.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [{ path: '', component: HomeComponent, pathMatch: 'full' }],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
