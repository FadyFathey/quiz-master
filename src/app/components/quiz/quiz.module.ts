import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuizComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [QuizComponent],
})
export class QuizModule {}
