import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule],
  exports: [RegisterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
})
export class RegisterModule {}
