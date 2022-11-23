import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  handleError(error:any){
    let errorMessage;
    if(error.error instanceof ErrorEvent){
      errorMessage = {message:error.error.message};
    }else{
      errorMessage={code:error.status,message:error.message};
    }
    return throwError(errorMessage);
  }

}
