import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { MatSidenavModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule,
    IonicModule,
    MatSidenavModule
  ],
  declarations: [HomePageComponent]
})
export class HomePageModule { }
