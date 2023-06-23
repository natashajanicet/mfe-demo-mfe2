import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './components/book-list/book-list.component';
import { MatButtonModule } from '@angular/material/button';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [BookListComponent],
  imports: [CommonModule, BookRoutingModule, MatButtonModule, CoreModule],
  exports: [BookListComponent],
})
export class BookModule {}
