import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrankWheelRoutingModule } from './crank-wheel-routing.module';
import { ListComponent } from './list/list.component';
import { WatchComponent } from './watch/watch.component';
import {NgbButtonsModule} from "@ng-bootstrap/ng-bootstrap";
import { CrankWheelComponent } from './crank-wheel.component';
import { ManagerComponent } from './manager/manager.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [ListComponent, WatchComponent, CrankWheelComponent, ManagerComponent],
  imports: [
    CommonModule,
    CrankWheelRoutingModule,
    NgbButtonsModule,
    FormsModule
  ]
})
export class CrankWheelModule { }
