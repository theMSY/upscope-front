import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from "./list/list.component";
import {WatchComponent} from "./watch/watch.component";
import {CrankWheelComponent} from "./crank-wheel.component";
import {ManagerComponent} from "./manager/manager.component";


const routes: Routes = [

  {
    path: '',
    component: CrankWheelComponent,
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'watch/:email',
        component: WatchComponent
      },
      {
        path: 'manager',
        component: ManagerComponent
      },
      {
        path:'',
        redirectTo:'list',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrankWheelRoutingModule {
}
