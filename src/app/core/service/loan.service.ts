import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import swal from "sweetalert2";
import { Router } from "@angular/router";
import { environment } from "./../../../environments/environment";
import { Loan } from "../model/loan";
import Swal from 'sweetalert2';

@Injectable({
  providedIn: "root",
})
export class LoanService {
  modal: boolean = false;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  constructor(private http: HttpClient, private router: Router) {}

  getLoans(): Observable<Loan[]> {
    return this.http
      .get(`${environment.url_api_loan}`)
      .pipe(map((response) => response as Loan[]));
  }

  create(loan: Loan) : Observable<any> {
    return this.http.post<Loan>(`${environment.url_api_loan}`, loan, {headers : this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }  

}
