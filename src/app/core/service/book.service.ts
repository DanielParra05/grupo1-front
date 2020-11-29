import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import Swal from "sweetalert2";
import { Router } from "@angular/router";
import { Book } from "../model/book";
import { environment } from "./../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class BookService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  modal: boolean = false;
  modalEliminar : boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  create(book: Book) : Observable<any> {
    return this.http.post<Book>(`${environment.url_api_book}`, book, {headers : this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }  

  delete(book: Book) : Observable<any> {
    return this.http.delete<void>(`${environment.url_api_book}/${book.isbn}`).pipe(
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

  abrirModalEliminar() {
    this.modalEliminar = true;
  }

  cerrarModalEliminar() {
    this.modalEliminar = false;
  }

  getAvailableBooks(): Observable<Book[]> {
    return this.http
      .get(`${environment.url_api_book}/all/true`)
      .pipe(map((response) => response as Book[]));
  }

}
