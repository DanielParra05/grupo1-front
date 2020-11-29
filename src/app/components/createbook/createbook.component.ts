import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Book } from '../../core/model/book';
import { BookService } from "../../core/service/book.service";

@Component({
  selector: "app-createbook",
  templateUrl: "./createbook.component.html",
  styleUrls: ['./../../app.component.css'],
})
export class CreatebookComponent implements OnInit {

  titulo = "Crear Libro";
  book: Book = new Book();
  private router : Router;
  private errors: string[];

  constructor(public bookService: BookService, router: Router) {
    this.router = router;
    this.errors = [];
  }

  ngOnInit(): void {}

  cerrarModal() {
    this.bookService.cerrarModal();
  }

  create() : void {
    this.bookService.create(this.book).subscribe(
      response => {
        this.cerrarModal();
        this.router.navigate(['/home'])
        Swal.fire('Libro guardado', `El libro ${response.title} se guardó exitosamente`, 'success');
      }, err => {
        this.cerrarModal();
        Swal.fire('Error', 'Se presentó un error guardando el libro', 'error');
      }
    );
  }
}
