import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule, RouterLink],
  exports: [HeroComponent],
})
export class HeroModule {}
