import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ProjectDescriptionComponent } from './project-description/project-description.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ProjectDescriptionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    ProjectDescriptionComponent
  ]
})
export class SharedModule { }
