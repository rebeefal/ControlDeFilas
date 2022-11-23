import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Branch} from 'src/app/models/branch';
import {QueueClient} from 'src/app/models/queue_client';
import {BranchService} from 'src/app/services/branch/branch.service';
import {BranchDepartmentService} from 'src/app/services/branch_department/branch-department.service';
import {QueueClientService} from 'src/app/services/queue_client/queue-client.service';
import {BranchDepartment} from "../../models/branch_department";
import {Ip} from "../../models/ip";

@Component({
  selector: 'app-kiosk',
  templateUrl: './kiosk.component.html',
  styleUrls: ['./kiosk.component.scss']
})
export class KioskComponent implements OnInit {
  private next: number = null;
  branches: Branch[];
  branchDepartments: BranchDepartment[];
  ip:Ip;
  branchId:number;
  queueClients: QueueClient[];
  private branch: Branch;
  private branchDepartment: BranchDepartment;
  queueClient: QueueClient;
  clients: number[] = [];

  constructor(
    private branchService: BranchService,
    private branchDepartmentService: BranchDepartmentService,
    private cdRef: ChangeDetectorRef,
    private queueClientService: QueueClientService
  ) {
  }

  ngOnInit(): void {
    this.getIPAddress();
    this.getAllBranches();
    this.getAllQueueClients();

  }

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }

  ngOnChanges(changes) {
    this.getAllQueueClients();
    if (changes) {
      console.log("changes   " + changes);
      console.log(this.queueClientsSelected)
    }
  }

  getAllBranches() {
    this.branchService.getAllBranches().subscribe((branches) => {
      this.branches = branches;
      this.cdRef.detectChanges()
    });
  }

  getAllQueueClients() {
    this.queueClientService.getAllQueueClients().subscribe((queueClients) => {
      this.queueClients = queueClients;
      this.cdRef.detectChanges()
    });
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
      this.branchService.getAllBranches().subscribe((branches) => {
        this.branches = branches;
        this.cdRef.detectChanges()
        this.branches.forEach(branch =>{
          console.log( "en getIpAddress" + branch.ip);
          if(branch.ip == value.ip){
            console.log( "en getIpAddress if " + branch.id);
            this.branchId = branch.id;
          }
        })
        this.getBranchDepartmentsByBranch(this.branchId);
        this.cdRef.detectChanges()
      });
    }));
  }


  addClient(branchDepartmentId: string) {
    this.branchDepartments.forEach(branchDepartment => {
      if (branchDepartment.branchDepartmentId == branchDepartmentId) {
        this.branchDepartment = branchDepartment;
        this.queueClient = {
          id: null,
          branchDepartmentId: this.branchDepartment.branchDepartmentId,
          clientNumber: this.getNextClientNumber(this.branchDepartment.branchDepartmentId),
          branchId: this.branchDepartment.branchId,
          departmentId: this.branchDepartment.departmentId,
          window: null,
          departmentLetter: this.branchDepartment.departmentLetter
        };
        this.queueClientService.createQueueClient(this.queueClient).subscribe(value => {
        });
      }
    });
  }

  printClientNumber(clientNumber:number){
    window.location.reload();
  }

  compareNumbers(a, b) {
    return a - b;
  }

  temp:string;
  getNextClientNumber(bd_id: string): number {
    this.next = 0;
    if (this.queueClients.length != 0) {

      this.queueClients.forEach(client => {

        if (client.branchDepartmentId == bd_id) {
          this.clients.push(client.clientNumber);
        }
      });
      this.clients.sort(this.compareNumbers);
      this.next = (this.clients.at((this.clients.length - 1)) + 1);

      console.log("2  "+this.next);
    } else {
      this.next = 1;
    }
    if(this.clients.length==0){
      this.next=1;
    }
    console.log("3  "+this.next)
    this.clients = [];
    return this.next;
  }


  get branchSelected(): Branch {
    return this.branch;
  }

  set branchSelected(value: Branch) {
    this.branch = value;
  }

  get queueClientSelected(): QueueClient {
    return this.queueClient;
  }

  set queueClientSelected(value: QueueClient) {
    this.queueClient = value;
  }

  get branchDepartmentSelected(): BranchDepartment {
    return this.branchDepartment;
  }

  set branchDepartmentSelected(value: BranchDepartment) {
    this.branchDepartment = value;
  }

  get branchDepartmentsSelected(): BranchDepartment[] {
    return this.branchDepartments;
  }

  set branchDepartmentsSelected(value: BranchDepartment[]) {
    this.branchDepartments = value;
  }

  get queueClientsSelected(): QueueClient[] {
    return this.queueClients;
  }

  set queueClientsSelected(value: QueueClient[]) {
    this.queueClients = value;
  }

  get ipSelected(): Ip {
    return this.ip;
  }

  set ipSelected(value: Ip) {
    this.ip = value;
  }


}
