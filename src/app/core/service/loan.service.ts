import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import swal from "sweetalert2";
import { Router } from "@angular/router";
import { environment } from "./../../../environments/environment";
import { Loan } from "../model/loan";

@Injectable({
  providedIn: "root",
})
export class LoanService {
  modal: boolean = false;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  constructor(private http: HttpClient, private router: Router) {}

  getLoans(): Observable<Loan[]> {
    return this.http
      .get(`${environment.url_api_book}/loans`)
      .pipe(map((response) => response as Loan[]));
  }

}
