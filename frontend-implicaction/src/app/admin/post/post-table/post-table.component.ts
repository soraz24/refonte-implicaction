import {Component} from '@angular/core';
import {PostService} from '../../../discussion/services/post.service';
import {ToasterService} from '../../../core/services/toaster.service';
import {finalize, take} from 'rxjs/operators';
import {Pageable} from '../../../shared/models/pageable';
import {Constants} from '../../../config/constants';
import {Post} from '../../../discussion/model/post';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.scss']
})
export class PostTableComponent {

  loading = true; // indique si les données sont en chargement
  // Ne pas oublier de retirer du tableau la valeur 'all' utilisée
  // afin de pouvoir cocher/décocher toutes les cases d'un coup

  selectedPosts: Post[] = [];

  // Pagination
  pageable: Pageable = Constants.PAGEABLE_DEFAULT;
  rowsPerPage = this.pageable.rowsPerPages[0];

  constructor(
    private postService: PostService,
    private toastService: ToasterService,
  ) {
  }

  loadPosts({first, rows}): void {
    this.loading = true;
    const page = first / rows;

    this.postService
      .getAllPosts({page, rows})
      .pipe(
        take(1),
        finalize(() => this.loading = false)
      )
      .subscribe(
        data => {
          this.pageable.totalPages = data.totalPages;
          this.pageable.rows = data.size;
          this.pageable.totalElements = data.totalElements;
          this.pageable.content = data.content;
        },
        () => this.toastService.error('Oops', 'Une erreur est survenue lors de la récupération des données'),
      );
  }
}
