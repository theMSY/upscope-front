import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UpscopeComponent} from "./upscope.component";
import {ClientsListComponent} from "./clients-list/clients-list.component";
import {HomeComponent} from "./home/home.component";
import {ClientConnectionPageComponent} from "./client-connection-page/client-connection-page.component";
import {ClientPageComponent} from "./client-page/client-page.component";


const routes: Routes = [
  {
    path: '',
    component: UpscopeComponent,
    children: [
      {
        path: 'list',
        component: ClientsListComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'watch/:id',
        component: ClientConnectionPageComponent
      },
      {
        path: 'manager',
        component: ClientPageComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpscopeRoutingModule {
}
