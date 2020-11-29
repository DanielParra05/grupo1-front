import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreatebookComponent } from './components/createbook/createbook.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BooksqueryComponent } from './components/booksquery/booksquery.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateloanComponent } from './components/createloan/createloan.component';
import { DeletebookComponent } from './components/deletebook/deletebook.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "popUpCreateBook", component: CreatebookComponent },
  { path: "booksquery", component: BooksqueryComponent },
  { path: "createloan", component: CreateloanComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CreatebookComponent,
    CreateloanComponent,
    DeletebookComponent,
    FooterComponent,
    BooksqueryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
