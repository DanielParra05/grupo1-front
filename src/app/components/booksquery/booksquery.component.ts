import { Component, OnInit } from "@angular/core";
import { Book } from "../../core/model/book";
import { Loan } from "../../core/model/loan";
import { BookService } from "../../core/service/book.service";
import { LoanService } from "../../core/service/loan.service";

@Component({
  selector: "app-booksquery",
  templateUrl: "./booksquery.component.html",
})
export class BooksqueryComponent implements OnInit {
  loans!: Loan[];
  availableBooks!: Book[];
  constructor(private bookService: BookService, private loanService: LoanService) {}

  ngOnInit(): void {
    this.getAvailableBooks();
    this.getLoans();
  }

  getAvailableBooks() {
    this.bookService.getAvailableBooks().subscribe(
      availableBooks => this.availableBooks = availableBooks
    );
  }

  getLoans() {
    this.loanService.getLoans().subscribe(
      loans => this.loans = loans
    );
  }
}
