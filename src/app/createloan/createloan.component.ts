import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import swal from "sweetalert2";
import { Loan } from "../core/model/loan";
import { LoanService } from "../core/service/loan.service";
import Swal from 'sweetalert2';
import { Book } from '../core/model/book';

@Component({
  selector: "app-createloan",
  templateUrl: "./createloan.component.html",
})
export class CreateloanComponent implements OnInit {
  public loan: Loan = new Loan();
  constructor(
    public loanService: LoanService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.loan.book = new Book();
  }

  ngOnInit(): void {}

  create() : void {
    this.loanService.create(this.loan).subscribe(
      response => {
        this.router.navigate(['/createloan'])
        Swal.fire('Prestamo Realizado', `El prestamo se guardó exitosamente`, 'success');
      }, err => {
        Swal.fire('Error', 'Se presentó un error guardando el prestamo', 'error');
      }
    );
  }

  goBack(){
    this.router.navigate(['']);
  }
}
