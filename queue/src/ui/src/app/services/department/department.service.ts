import { Injectable } from '@angular/core';
import { ErrorService } from '../service_handlers/error/error.service';
import {HttpClient} from '@angular/common/http'
import {catchError} from 'rxjs/operators'
import { Department } from 'src/app/models/department';
import { Observable } from 'rxjs';
import {Branch} from "../../models/branch";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  queryUrl:string = `http://localhost:8080/api/department`;
  url:string="";
  headers = {
    headers:{
      'Content-Type':'application/json'
    }
  }

  constructor(private http: HttpClient, private errorService:ErrorService) {}

  getAllDepartments():Observable<Department[]>{
    this.url=``;
    this.url = `${this.queryUrl}/all`;
    return this.http.get<Department[]>(this.url).pipe(catchError(this.errorService.handleError))
  }

  createDepartment(department:Department): Observable<Department>{
    this.url=``;
    this.url = `${this.queryUrl}/save`;
    return this.http.post<Department>(this.url,department).pipe(catchError(this.errorService.handleError));
  }

  deleteDepartmentAll(){
    this.url=``;
    this.url=`${this.queryUrl}/delete/all`;
    return this.http.delete<number>(this.url,
      this.headers).pipe(catchError(this.errorService.handleError));
  }

  deleteDepartmentById(id:string){
    this.url=``;
    this.url=`${this.queryUrl}/delete/${id}`;
    return this.http.put<number>(this.url,id,
      this.headers).pipe(catchError(this.errorService.handleError));
  }

}
