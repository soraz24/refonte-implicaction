import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsTableComponent} from './components/posts-table/posts-table.component';
import {TableModule} from 'primeng/table';
import {PostsComponent} from './posts.component';


@NgModule({
  declarations: [
    PostsTableComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ]
})
export class PostsModule {
}
