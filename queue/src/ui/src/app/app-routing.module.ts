import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KioskComponent } from './views/kiosk/kiosk.component';
import { QueueComponent } from './views/queue/queue.component';
import {TicketComponent} from "./views/ticket/ticket.component";
import {MaintenanceComponent} from "./views/maintenance/maintenance.component";
import {MaintenanceQueueComponent} from "./views/maintenance/maintenance-queue/maintenance-queue.component";
import {
  MaintenanceBranchDepartmentComponent
} from "./views/maintenance/maintenance-branch-department/maintenance-branch-department.component";
import {
  MaintenanceBranchListComponent
} from "./views/maintenance/maintenance-branch-list/maintenance-branch-list.component";
import {HomeComponent} from "./views/home/home.component";


const routes: Routes = [
  {
    path: 'maintenance', component: MaintenanceComponent,
    children: [
      {
        path: '',
        component: MaintenanceQueueComponent
      },
      {
        path: 'maintenance-queue',
        component: MaintenanceQueueComponent
      },
      {
        path: 'maintenance-branch-department',
        component: MaintenanceBranchDepartmentComponent
      },
      {
        path: 'maintenance-branch-list',
        component: MaintenanceBranchListComponent
      }
    ]

  },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent},
  { path: 'kiosk', component: KioskComponent },
  //{ path: 'queue', component: QueueComponent },
  { path: 'ticket', component: TicketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
