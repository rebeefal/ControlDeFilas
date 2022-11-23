import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Branch} from "../../../models/branch";
import {Department} from "../../../models/department";
import {BranchDepartment} from "../../../models/branch_department";
import {BranchService} from "../../../services/branch/branch.service";
import {DepartmentService} from "../../../services/department/department.service";
import {BranchDepartmentService} from "../../../services/branch_department/branch-department.service";
import getDocumentElement from "@popperjs/core/lib/dom-utils/getDocumentElement";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-maintenance-branch-list',
  templateUrl: './maintenance-branch-list.component.html',
  styleUrls: ['./maintenance-branch-list.component.scss']
})
export class MaintenanceBranchListComponent implements OnInit {

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
      //if (branch.branchId == id) {
      if (branch.id == id) {
        this.branch = branch;
      }
    });
    //this.branch = e.target.value;
  }

  onChangeDepartment(e) {
    const id = e.target.value
    this.departments.forEach(department => {
      // if (department.departmentId == id) {
      if (department.id == id) {
        this.department = department;
      }
    });
    //this.department = e.target.value;
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
    window.location.reload();
  }

  deleteBranchDepartmentById(branchId:number, departmentId:number){
    this.branchDepartmentService.deleteBranchDepartmentById(branchId.toString()+departmentId.toString()).subscribe(value => {
    });
    window.location.reload();
  }

  deleteAllBranchDepartments(){

  }

  newBranch:Branch;


  createBranch(fBranch:NgForm){
    this.newBranch = {
      id:null,
      //branchId:fBranch.value.branchId,
      ip:fBranch.value.ip,
      branchName:fBranch.value.branchName
    }
    this.branchService.createBranch(this.newBranch).subscribe(value =>{});
    window.location.reload();
  }

  newDepartment:Department;
  createDepartment(fDepartment:NgForm){
    this.newDepartment = {
      id:null,
      //departmentId:fDepartment.value.departmentId,
      departmentName:fDepartment.value.departmentName,
      departmentLetter:fDepartment.value.departmentLetter
    }
    this.departmentService.createDepartment(this.newDepartment).subscribe(value=>{});
    window.location.reload();
  }

  deleteDepartmentById(id:number){
    this.departmentService.deleteDepartmentById(id.toString())
      .subscribe(value => {});
    window.location.reload();
  }

  deleteDepartmentsAll(){
    this.departmentService.deleteDepartmentAll()
      .subscribe(value => {});
    window.location.reload();
  }

  deleteBranchById(id:number){
    this.branchService.deleteBranchById(id.toString())
      .subscribe(value => {});
    window.location.reload();
  }


  deleteBranchAll(){
    this.branchService.deleteBranchAll()
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
