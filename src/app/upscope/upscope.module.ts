import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UpscopeRoutingModule} from './upscope-routing.module';
import {ClientPageComponent} from "./client-page/client-page.component";
import {ClientsListComponent} from "./clients-list/clients-list.component";
import {HomeComponent} from "./home/home.component";
import {ClientConnectionPageComponent} from "./client-connection-page/client-connection-page.component";
import {UpscopeComponent} from "./upscope.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    ClientPageComponent,
    ClientsListComponent,
    HomeComponent,
    ClientConnectionPageComponent,
    UpscopeComponent
  ],
  imports: [
    CommonModule,
    UpscopeRoutingModule,
    NgbModule
  ]
})
export class UpscopeModule {
}
