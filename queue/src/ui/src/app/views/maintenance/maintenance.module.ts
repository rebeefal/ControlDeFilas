import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceQueueComponent } from './maintenance-queue/maintenance-queue.component';
import { MaintenanceBranchListComponent } from './maintenance-branch-list/maintenance-branch-list.component';
import { MaintenanceBranchDepartmentComponent } from './maintenance-branch-department/maintenance-branch-department.component';
import {MaintenanceBranchDepartmentModule} from "./maintenance-branch-department/maintenance-branch-department.module";
import {MaintenanceBranchListModule} from "./maintenance-branch-list/maintenance-branch-list.module";
import {MaintenanceQueueModule} from "./maintenance-queue/maintenance-queue.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    MaintenanceQueueComponent,
    MaintenanceBranchListComponent,
    MaintenanceBranchDepartmentComponent
  ],
    imports: [
        MaintenanceBranchDepartmentModule,
        MaintenanceBranchListModule,
        MaintenanceQueueModule,
        CommonModule,
        FormsModule
    ]
})
export class MaintenanceModule { }
