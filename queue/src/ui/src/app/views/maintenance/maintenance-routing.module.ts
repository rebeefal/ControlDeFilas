import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {
  MaintenanceBranchDepartmentComponent
} from "./maintenance-branch-department/maintenance-branch-department.component";

const routes: Routes = [
  { path: 'maintenance-branch-department', component: MaintenanceBranchDepartmentComponent,outlet:'maintenance'},
  { path: 'maintenance-branch-list', component: MaintenanceBranchDepartmentComponent },
  { path: '', component: MaintenanceBranchDepartmentComponent },
  { path: 'maintenance-queue', component: MaintenanceBranchDepartmentComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class MaintenanceRoutingModule { }
