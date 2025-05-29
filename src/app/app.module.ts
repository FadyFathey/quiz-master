import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { HeroModule } from './components/hero/hero.module';
import { AboutModule } from './components/about/about.module';
import { QuizPromoModule } from './components/quiz-promo/quiz-promo.module';
import { FeaturesModule } from './components/features/features.module';
import { FooterModule } from './components/footer/footer.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    HeroModule,
    AboutModule,
    QuizPromoModule,
    FeaturesModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
