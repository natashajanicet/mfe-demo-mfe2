import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  constructor(private router: Router) {
    console.log(sessionStorage.getItem('authKey'));
  }

  navigate() {
    this.router.navigate(['/']);
  }
}
