import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import Swal from "sweetalert2";
import { Router } from "@angular/router";
import { Book } from '../model/book';

@Injectable({
  providedIn: "root",
})
export class BookService {

  private urlEndPoint : string = 'http://localhost:8080/rest/service/book';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private http : HttpClient;

  modal: boolean = false;

  constructor(http: HttpClient, private router: Router) {
    this.http = http;
  }

  create(book: Book) : Observable<any> {
    return this.http.post<Book>(this.urlEndPoint, book, {headers : this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  abrirModal() {
    this.modal = true;
  }

  cerrarModal() {
    this.modal = false;
  }
}
