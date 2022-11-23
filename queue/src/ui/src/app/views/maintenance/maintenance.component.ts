import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Branch } from 'src/app/models/branch';
import { Department } from 'src/app/models/department';
import { BranchService } from 'src/app/services/branch/branch.service';
import { BranchDepartmentService } from 'src/app/services/branch_department/branch-department.service';
import { DepartmentService } from 'src/app/services/department/department.service';
import {BranchDepartment} from "../../models/branch_department";

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {

ngOnInit() {
}

}
