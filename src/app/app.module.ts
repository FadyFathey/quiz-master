// app.module.ts
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
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
    SocialLoginModule,
    HttpClientModule,
    QuizModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '238827403896-54r3r17355gaekjcglcjomf94u3np3iv.apps.googleusercontent.com', // Your actual Client ID
              {
                oneTapEnabled: false, // Disable One Tap to avoid conflicts
                scopes: 'openid profile email',
              }
            ),
          },
        ],
        onError: (err: any) => {
          console.error('Social Auth Error:', err);
        },
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
