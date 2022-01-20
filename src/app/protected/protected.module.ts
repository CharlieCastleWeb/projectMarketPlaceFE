import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { NgBootstrapModule } from '../ng-bootstrap/ng-bootstrap.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    CreateProjectComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    SharedModule,
    FormsModule,
    NgBootstrapModule
  ]
})
export class ProtectedModule { }
