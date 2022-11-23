import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import { Branch } from 'src/app/models/branch';
import { QueueClient } from 'src/app/models/queue_client';
import { BranchService } from 'src/app/services/branch/branch.service';
import { BranchDepartmentService } from 'src/app/services/branch_department/branch-department.service';
import { QueueClientService } from 'src/app/services/queue_client/queue-client.service';
import {BranchDepartment} from "../../models/branch_department";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {Ip} from "../../models/ip";


@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})



export class QueueComponent implements OnInit {

  queueClients:QueueClient[];
  branchDepartments:BranchDepartment[];
  branch: Branch;
  private branchDepartment:BranchDepartment;
  private queueClient:QueueClient;
  ip:Ip;
  branchId:number;


  @ViewChild(MatSort)sort:MatSort;

  constructor(
    private branchService: BranchService,
    private branchDepartmentService: BranchDepartmentService,
    private cdRef: ChangeDetectorRef,
    private queueClientService:QueueClientService
  ) { }


  ngOnInit(): void {
    this.getIPAddress()
    //this.getAllQueueClients();
  }

  getAllQueueClientsByBrachId(branchId:number){
    this.queueClientService.getAllQueueClientsByBrachId(this.branchId).subscribe((queueClients) => {
      this.queueClients = queueClients;
      console.log(this.queueClients);
      this.cdRef.detectChanges()
    });
    //this.getAllBranchDepartments(this.queueClients);
  }

  getAllQueueClients(){
    this.queueClientService.getAllQueueClients().subscribe((queueClients) => {
      this.queueClients = queueClients;
      console.log(this.queueClients);
      this.cdRef.detectChanges()
    });
    this.getAllBranchDepartments(this.queueClients);
  }

  getBranchDepartmentsByBranch(branchId:number) {
    this.branchDepartmentService.getBranchDepartmentsByBranch(branchId).subscribe((branchDepartments) => {
      this.branchDepartments = branchDepartments;
      this.cdRef.detectChanges()
    });
  }

  getIPAddress() {
    this.branchDepartmentService.getIPAddress().subscribe((value => {
      this.ip = value;
      console.log(this.ip);
      if(value.ip=="75.70.125.53"){this.branchId=1}
        //if(value.ip=="75.70.125.53"){this.branchId=2}
        //if(value.ip=="75.70.125.53"){this.branchId=3}
      //if(value.ip=="75.70.125.53"){this.branchId=4}
      else{this.branchId=2}
      this.getBranchDepartmentsByBranch(this.branchId);
      this.getAllQueueClientsByBrachId(this.branchId);
      this.cdRef.detectChanges()
    }));
  }


  getAllBranchDepartments(queueClients:QueueClient[]){
    this.branchDepartmentService.getAllBranchDepartments().subscribe((branchDepartments) => {
      this.branchDepartments = branchDepartments;
      this.cdRef.detectChanges()
    });
  }



  deleteById(id:number){
    this.queueClients.forEach(queueClient => {
      if (queueClient.id == id) {
        this.queueClient = queueClient;
        this.queueClientService.deleteById(this.queueClient.id).subscribe(value => {
        });
        window.location.reload();
      }
    });
  }

}


