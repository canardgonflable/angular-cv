import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgesComponent } from './badges.component';
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    BadgesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class BadgesModule {
}
