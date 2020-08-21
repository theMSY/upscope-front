import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ClientsListComponent} from "./clients-list/clients-list.component";
import {ClientPageComponent} from "./client-page/client-page.component";
import {ClientConnectionPageComponent} from "./client-connection-page/client-connection-page.component";


const routes: Routes = [
  {
    path: 'list',
    component: ClientsListComponent
  },
  {
    path: 'manager/manager/:id',
    component: ClientConnectionPageComponent
  },
  {
    path: 'manager',
    component: ClientPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
