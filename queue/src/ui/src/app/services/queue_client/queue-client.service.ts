import { Injectable } from '@angular/core';
import { ErrorService } from '../service_handlers/error/error.service';
import { HttpClient} from '@angular/common/http'
import { catchError} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { QueueClient } from 'src/app/models/queue_client';
import {BranchDepartment} from "../../models/branch_department";

@Injectable({
  providedIn: 'root'
})
export class QueueClientService {

  queryUrl:string = `http://localhost:8080/api/queue`;
  url:string="";
  headers = {
    headers:{
      'Content-Type':'application/json'
    }
  }

  queueClients:QueueClient[];
  get queueClientsSelected(): QueueClient[] {
    return this.queueClients;
  }
  set queueClientsSelected(value: QueueClient[]) {
    this.queueClients = value;
  }

  constructor(private http: HttpClient, private errorService:ErrorService) {}

  createQueueClient(queueClient:QueueClient): any{
    this.url=``;
    this.url=`${this.queryUrl}/save`;
    return this.http.post<QueueClient>(this.url,queueClient,
      this.headers).pipe(catchError(this.errorService.handleError));
  }

  deleteById(id:number):any{
    this.url=``;
    this.url=`${this.queryUrl}/delete/${id}`;
    return this.http.put<number>(this.url,id,
      this.headers).pipe(catchError(this.errorService.handleError));
  }

  deleteQueuesAll(){
    this.url=``;
    this.url=`${this.queryUrl}/delete/all`;
    return this.http.delete<number>(this.url,
      this.headers).pipe(catchError(this.errorService.handleError));
  }


  getAllQueueClients():Observable<QueueClient[]>{
    this.url=``;
    this.url=`${this.queryUrl}/all`;
    return this.http.get<QueueClient[]>(this.url)
      .pipe(catchError(this.errorService.handleError));
  }

  getAllQueueClientsByBrachId(branchId:number):Observable<QueueClient[]>{
    console.log( "in queue service " + branchId);
    this.url=``;
    this.url=`${this.queryUrl}/branch/department/${branchId}`;
    return this.http.get<QueueClient[]>(this.url)
      .pipe(catchError(this.errorService.handleError));
  }



  getQueueByBd_Id(QueueClient:QueueClient):Observable<QueueClient[]>{
    this.url=``;
    this.url=`${this.queryUrl}/branch/${QueueClient.branchDepartmentId}`;
    return this.http.get<QueueClient[]>
    (this.url).pipe(catchError(
      this.errorService.handleError));
  }

  deleteQueueClient(QueueClient:QueueClient): Observable<QueueClient>{
    this.queryUrl=this.queryUrl+`/delete-client/${QueueClient.branchDepartmentId}`;
    return this.http.delete<QueueClient>(this.queryUrl).pipe(catchError(this.errorService.handleError));
  }

callClient(queueClient:QueueClient){
  console.log("received  client:   "+ queueClient.id+queueClient.window)
    this.url=``;
    this.url=`${this.queryUrl}/window/add`;
    return this.http.put<QueueClient>(this.url,queueClient,
      this.headers).pipe(catchError(this.errorService.handleError));
  }


}
