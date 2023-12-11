import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {MatDividerModule} from '@angular/material/divider';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavBarComponent,
    MatDividerModule
  ]
})
export class HomeModule { }
