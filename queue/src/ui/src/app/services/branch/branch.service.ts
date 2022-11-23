import { Injectable } from '@angular/core';
import { ErrorService } from '../service_handlers/error/error.service';
import {HttpClient} from '@angular/common/http'
import {catchError} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Branch } from 'src/app/models/branch';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  queryUrl:string = `http://localhost:8080/api/branch`;
  url:string="";

  headers = {
    headers:{
      'Content-Type':'application/json'
    }
  }
  constructor(private http: HttpClient,
    private errorService:ErrorService) {}

  getAllBranches():Observable<Branch[]>{
    this.url=``;
    this.url=`${this.queryUrl}/all`;
    return this.http.get<Branch[]>
    (this.url).pipe(catchError(
      this.errorService.handleError))
  }


  createBranch(branch:Branch): Observable<Branch>{
    this.url=``;
    this.url=`${this.queryUrl}/save`;
    return this.http.post<Branch>(this.url,branch).pipe(catchError(this.errorService.handleError));
  }

  deleteBranchAll(){
    this.url=``;
    this.url=`${this.queryUrl}/delete/all`;
    return this.http.delete<number>(this.url,
      this.headers).pipe(catchError(this.errorService.handleError));
  }
  deleteBranchById(id:string){
    this.url=``;
    this.url=`${this.queryUrl}/delete/${id}`;
    return this.http.put<number>(this.url,id,
      this.headers).pipe(catchError(this.errorService.handleError));
  }

}
