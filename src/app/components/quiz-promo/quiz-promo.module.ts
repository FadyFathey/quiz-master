import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizPromoComponent } from './quiz-promo.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [QuizPromoComponent],
  imports: [CommonModule, RouterLink],
  exports: [QuizPromoComponent],
})
export class QuizPromoModule {}
