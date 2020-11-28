import { Component, OnInit } from "@angular/core";
import { BookService } from "./../core/service/book.service";

@Component({
  selector: "app-createbook",
  templateUrl: "./createbook.component.html",
  styleUrls: ["./createbook.component.css"],
})
export class CreatebookComponent implements OnInit {
  titulo = "Crear Libro";

  constructor(public bookService: BookService) {}

  ngOnInit(): void {}

  cerrarModal() {
    this.bookService.cerrarModal();
  }
}
