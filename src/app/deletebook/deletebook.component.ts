import { Component } from '@angular/core';
import { Book } from '../core/model/book';
import { BookService } from '../core/service/book.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./../app.component.css'],
})
export class DeletebookComponent {

  book: Book = new Book();

  isbn : string = "";
  titulo : string = "Eliminar libro";

  private router : Router;

  constructor(public bookService: BookService, router: Router) {
    this.router = router;
  }

  cerrarModal() {
    this.bookService.cerrarModalEliminar();
  }

  delete() : void {
    this.bookService.delete(this.book).subscribe(
      response => {
        this.cerrarModal();
        this.router.navigate(['/home'])
        Swal.fire('Libro eliminado', `El libro se ha eliminado exitosamente`, 'success');
      }, err => {
        Swal.fire('Error', 'Se presentó un error eliminando el libro', 'error');
      }
    );
  }

}
