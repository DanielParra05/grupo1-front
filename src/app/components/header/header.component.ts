import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit {
  titulo = "Biblioteca - Grupo 1";
  constructor() {}

  ngOnInit(): void {}
}
