import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { SocialLoginModule } from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, SocialLoginModule],
})
export class RegisterModule {}
