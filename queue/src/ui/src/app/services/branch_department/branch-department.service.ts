import { Injectable } from '@angular/core';
import { ErrorService } from '../service_handlers/error/error.service';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators'
import {Observable, Subscription} from 'rxjs';
import {BranchDepartment} from "../../models/branch_department";
import {Branch} from "../../models/branch";
import {Ip} from "../../models/ip";


@Injectable({
  providedIn: 'root'
})
export class BranchDepartmentService {

  queryUrl:string = `http://localhost:8080/api/branch-department`;
  url:string="";
  private _branchId:number;
  headers = {
    headers:{
      'Content-Type':'application/json'
    }
  }
  constructor(private http: HttpClient,
    private errorService:ErrorService) {}

  ngOnInit() {
  }

  //gets public ip
  getIPAddress(){
    return this.http.get<Ip>("http://api.ipify.org/?format=json")
      .pipe(catchError(this.errorService.handleError));
  }

  getAllBranchDepartments(){
    this.url=``;
    this.url=`${this.queryUrl}/all`;
    return this.http.get<BranchDepartment[]>(this.url)
    .pipe(catchError(this.errorService.handleError));
  }

    getBranchDepartmentsByBranch(branchId:number):Observable<BranchDepartment[]>{
      //console.log( "in service " + branchId);
      this.url=``;
      this.url=`${this.queryUrl}/branch/${branchId}`;
      return this.http.get<BranchDepartment[]>(this.url)
      .pipe(catchError(this.errorService.handleError));
  }

  createBranch_department(branchDepartment:BranchDepartment): any{
    this.url=``;
    this.url=`${this.queryUrl}/save`;
    return this.http.post<BranchDepartment>(this.url,branchDepartment,
      this.headers).pipe(catchError(this.errorService.handleError));
  }

  deleteBranchDepartmentById(branchDepartmentId:string){
    this.url=``;
    this.url=`${this.queryUrl}/delete/${branchDepartmentId}`;
    return this.http.put<number>(this.url,branchDepartmentId,
      this.headers).pipe(catchError(this.errorService.handleError));
  }

  deleteBranchDepartmentAll(){
    this.url=``;
    this.url=`${this.queryUrl}/delete/all`;
    return this.http.delete<number>(this.url,
      this.headers).pipe(catchError(this.errorService.handleError));
  }




}
