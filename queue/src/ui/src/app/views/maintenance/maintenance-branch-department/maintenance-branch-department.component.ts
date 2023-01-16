import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Branch } from 'src/app/models/branch';
import { Department } from 'src/app/models/department';
import { BranchService } from 'src/app/services/branch/branch.service';
import { BranchDepartmentService } from 'src/app/services/branch_department/branch-department.service';
import { DepartmentService } from 'src/app/services/department/department.service';
import {BranchDepartment} from "../../../models/branch_department";


@Component({
  selector: 'app-maintenance-branch-department',
  templateUrl: './maintenance-branch-department.component.html',
  styleUrls: ['./maintenance-branch-department.component.scss']
})
export class MaintenanceBranchDepartmentComponent implements OnInit {

  branches: Branch[];
  departments: Department[];
  branch: Branch;
  department: Department;
  branchDepartment: BranchDepartment=null;

  constructor(
    private branchService: BranchService,
    private departmentService: DepartmentService,
    private cdRef: ChangeDetectorRef,
    private branchDepartmentService: BranchDepartmentService) { }


  ngOnInit(): void {
    this.getAllBranches();
    this.getAllDepartments();
  }

  getAllBranches() {
    this.branchService.getAllBranches().subscribe((branches) => {
      this.branches = branches;
      this.cdRef.detectChanges()
    });
  }
  getAllDepartments() {
    this.departmentService.getAllDepartments().subscribe((departments) => {
      this.departments = departments;
      this.cdRef.detectChanges()
    });
  }

  onChangeBranch(e) {
    const id = e.target.value
    this.branches.forEach(branch => {
      if (branch.id == id) {
        this.branch = branch;
      }
    });
  }

  onChangeDepartment(e) {
    const id = e.target.value
    this.departments.forEach(department => {
      if (department.id == id) {
        this.department = department;
      }
    });
  }

  saveEntry() {
    this.branchDepartment= {
      id:null,
      branchDepartmentId: this.branch.id.toString() + this.department.id.toString(),
      branchId:this.branch.id,   
      departmentId: this.department.id, 
      branchName:this.branch.branchName,
      departmentName:this.department.departmentName,
      departmentLetter:this.department.departmentLetter
    };
    this.branchDepartmentService.createBranch_department(this.branchDepartment).subscribe(value =>{
    });
  }


  deleteBranchDepartmentById(branchId:number, departmentId:number){
    this.branchDepartmentService.deleteBranchDepartmentById(branchId.toString()+departmentId.toString())
      .subscribe(value => {});
    window.location.reload();
  }

  deleteAllBranchDepartments(){
    this.branchDepartmentService.deleteBranchDepartmentAll()
      .subscribe(value => {});
    window.location.reload();
  }

  get branchSelected(): Branch {
    return this.branch;
  }
  set branchSelected(value: Branch) {
    this.branch = value;
  }

  get departmentSelected(): Department {
    return this.department;
  }

  set departmentSelected(value: Department) {
    this.department = value;
  }
  get branchDepartmentSelected(): BranchDepartment {
    return this.branchDepartment;
  }

  set branchDepartmentSelected(value: BranchDepartment) {
    this.branchDepartment = value;
  }

}
