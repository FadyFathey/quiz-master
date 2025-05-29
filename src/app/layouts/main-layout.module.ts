import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule

import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NavBarModule } from '../components/nav-bar/nav-bar.module';
import { FooterModule } from '../components/footer/footer.module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [CommonModule, RouterModule, NavBarModule, FooterModule],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule {}
