import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import swal from "sweetalert2";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class BookService {
  modal: boolean = false;

  abrirModal() {
    this.modal = true;
  }

  cerrarModal() {
    this.modal = false;
  }
}
