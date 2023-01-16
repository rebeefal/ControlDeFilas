import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {QueueClient} from "../../../models/queue_client";
import {BranchDepartment} from "../../../models/branch_department";
import {Branch} from "../../../models/branch";
import {BranchService} from "../../../services/branch/branch.service";
import {BranchDepartmentService} from "../../../services/branch_department/branch-department.service";
import {QueueClientService} from "../../../services/queue_client/queue-client.service";
import {Ip} from "../../../models/ip";

@Component({
  selector: 'app-maintenance-queue',
  templateUrl: './maintenance-queue.component.html',
  styleUrls: ['./maintenance-queue.component.scss']
})
export class MaintenanceQueueComponent implements OnInit {

  queueClients:QueueClient[];
  branchDepartments:BranchDepartment[];
  branch: Branch;
  branchDepartment:BranchDepartment;
  queueClient:QueueClient;
  ip:Ip;
  branches: Branch[];
  branchId:number;


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
          console.log(branch.ip + "=="+ value.ip)
          if(branch.ip == value.ip) {
              this.branchId = branch.id;
              console.log(this.branchId)
          }})
        
        this.getBranchDepartmentsByBranch(this.branchId);
        this.getAllQueueClientsByBrachId(this.branchId);
        this.cdRef.detectChanges()
      });
    }));
  }

  getBranchDepartmentsByBranch(branchId:number) {

    console.log( " bd in mainy q component "+branchId)
    this.branchDepartmentService.getBranchDepartmentsByBranch(branchId).subscribe((branchDepartments) => {
      this.branchDepartments = branchDepartments;
      this.cdRef.detectChanges()
    });
  }

  getAllQueueClientsByBrachId(branchId:number){
    this.queueClientService.getAllQueueClientsByBrachId(this.branchId).subscribe((queueClients) => {
      this.queueClients = queueClients;

      this.cdRef.detectChanges()
    });
    //this.getAllBranchDepartments(this.queueClients);
  }


  getAllQueueClients(){
    this.queueClientService.getAllQueueClients().subscribe((queueClients) => {
      this.queueClients = queueClients;

      this.cdRef.detectChanges()
    });
    this.getAllBranchDepartments(this.queueClients);
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

  deleteAllQueues(){
    this.queueClientService.deleteQueuesAll()
      .subscribe(value => {});
    window.location.reload();

  }

  callClient(id:number){
    if(!(this.window== '')){
      console.log(this.window)
      this.queueClients.forEach(queueClient => {
        if (queueClient.id == id) {

          this.queueClient = queueClient;
          this.queueClient.window = this.window;
          this.queueClientService.callClient(this.queueClient).subscribe(value => {
          });
        }
      });
      this.window='';
    }
  }
  window:string = '';
  onKey(event: any) {
    console.log("window    "+window)
    this.window = event.target.value;
  }

  get windowSelected(): string {
    return this.window;
  }
  set windowSelected(value: string) {
    this.window = value;
  }





}



