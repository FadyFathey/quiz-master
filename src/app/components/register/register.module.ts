import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { SocialLoginModule } from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, SocialLoginModule],
  exports: [RegisterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
})
export class RegisterModule {}
