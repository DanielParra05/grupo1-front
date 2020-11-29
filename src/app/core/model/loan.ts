import { Book } from "./book";

export class Loan {
    book!: Book;
    user!: string;
    dateRequest!: Date;
    dateDelivery!: Date;
  }
  