import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BranchDepartmentService} from "../../services/branch_department/branch-department.service";
import {QueueClientService} from "../../services/queue_client/queue-client.service";
import {QueueClient} from "../../models/queue_client";
import {BranchDepartment} from "../../models/branch_department";
import {Branch} from "../../models/branch";
import {Ip} from "../../models/ip";
import {BranchService} from "../../services/branch/branch.service";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  queueClients:QueueClient[];
  branchDepartments:BranchDepartment[];
  private branch: Branch;
  private branchDepartment:BranchDepartment;
  private queueClient:QueueClient;
  ip:Ip;
  branchId:number;
  branches: Branch[];

  constructor(
    private branchService: BranchService,
    private branchDepartmentService: BranchDepartmentService,
    private cdRef: ChangeDetectorRef,
    private queueClientService:QueueClientService
  ) { }


  ngOnInit(): void {
    this.getIPAddress()

  }

  tempIp:string;
  getIPAddress() {
    this.branchDepartmentService.getIPAddress().subscribe((value => {
      this.ip = value;
      console.log(this.ip);
      this.branchService.getAllBranches().subscribe((branches) => {
        this.branches = branches;
        this.cdRef.detectChanges()
        this.branches.forEach(branch =>{

          this.tempIp = "1.1.1.1"; // temp
          //if(branch.ip == value.ip){
          if(branch.ip == this.tempIp){

            this.branchId = branch.id;
          }
        })
        this.getBranchDepartmentsByBranch(this.branchId);
        this.getAllQueueClientsByBrachId(this.branchId);
        this.cdRef.detectChanges()
      });
    }));
  }



  getBranchDepartmentsByBranch(branchId:number) {
    this.branchDepartmentService.getBranchDepartmentsByBranch(branchId).subscribe((branchDepartments) => {
      this.branchDepartments = branchDepartments;
      this.cdRef.detectChanges()
    });
  }

  getAllQueueClientsByBrachId(branchId:number){
    this.queueClientService.getAllQueueClientsByBrachId(this.branchId).subscribe((queueClients) => {
      this.queueClients = queueClients;
      console.log(this.queueClients);
      this.cdRef.detectChanges()
    });

  }


}
