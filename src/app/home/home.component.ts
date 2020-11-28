import { Component, OnInit } from "@angular/core";
import { Book } from "./../core/model/book";
import swal from "sweetalert2";
import { BookService } from "./../core/service/book.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private bookService: BookService) {}
  ngOnInit(): void {}

  abrirModal() {
    console.log("HOLAAAAA");
    this.bookService.abrirModal();
  }
}
