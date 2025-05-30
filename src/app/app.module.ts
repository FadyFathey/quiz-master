import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home.module';
import { LoginModule } from './components/login/login.module';
import { RegisterModule } from './components/register/register.module';
import { MainLayoutModule } from './layouts/main-layout.module';
import { HttpClientModule } from '@angular/common/http';
import { QuizModule } from './components/quiz/quiz.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainLayoutModule,
    HomeModule,
    LoginModule,
    RegisterModule,
    HttpClientModule,
    QuizModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
