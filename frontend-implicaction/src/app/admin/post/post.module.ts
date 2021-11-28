import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostTableComponent} from './post-table/post-table.component';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    PostTableComponent
  ],
  exports: [
    PostTableComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ]
})
export class PostModule {
}
