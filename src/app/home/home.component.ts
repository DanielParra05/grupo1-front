import { Component, OnInit } from "@angular/core";
import swal from "sweetalert2";
import { BookService } from "./../core/service/book.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {

  constructor(public bookService: BookService) {}
  ngOnInit(): void {}

  abrirModal() {
    this.bookService.abrirModal();
  }
}
