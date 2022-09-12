import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { LoadingService } from '../loading/loading.service';
import { ToastService } from '../toast/toast.service';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { Employee } from 'src/app/interface/employee';

@Injectable({
  providedIn: 'root',
})
export class AddEmployeeService {
  constructor(
    private http: HttpService,
    private loadingService: LoadingService,
    private toastService: ToastService
  ) {}

  addEmployee(employee: Employee) {
    const httpHeader = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post('/create', employee, httpHeader).pipe(
      catchError((error) => {
        let errorMessage: string;
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          console.log(error);
          errorMessage = this.getServerErrorMessage(error);
        }
        this.loadingService.dismissLoading();
        this.toastService.presentToast(errorMessage, true);
        return throwError(errorMessage);
      })
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.error.message}`);
      return of(result as T);
    };
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 401:
        return error.error.message;
      case 403:
        return `Access Denied: ${error.error.message}`;
      case 404:
        return error.error.message;
      case 409:
        return `${error.error.message}`;
      case 500:
        return `Internal Server Error: ${error.error.message}`;
      default:
        return `Unknown Server Error: ${error.error.message}`;
    }
  }
}
