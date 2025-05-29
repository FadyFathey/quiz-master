import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { HeroModule } from './components/hero/hero.module';
import { AboutModule } from './components/about/about.module';
import { QuizPromoModule } from './components/quiz-promo/quiz-promo.module';
import { FeaturesModule } from './components/features/features.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HeroModule,
    AboutModule,
    QuizPromoModule,
    FeaturesModule,
  ],
  exports: [
    HomeComponent, // Export HomeComponent so other modules (like AppModule) can use it
  ],
})
export class HomeModule {}
