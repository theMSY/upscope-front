import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientsListComponent} from "./upscope/clients-list/clients-list.component";
import {ClientPageComponent} from "./upscope/client-page/client-page.component";
import {ClientConnectionPageComponent} from "./upscope/client-connection-page/client-connection-page.component";
import {HomeComponent} from "./home/home.component";
import {UpscopeComponent} from "./upscope/upscope.component";


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'crank-wheel',
    loadChildren: () => import('./crank-wheel/crank-wheel.module').then(m => m.CrankWheelModule)
  },
  {
    path: 'upscope',
    loadChildren: () => import('./upscope/upscope.module').then(m=>m.UpscopeModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
