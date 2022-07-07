import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadMoviesByPage } from '../state/movie.actions';
import { selectAllMovies, getPage } from '../state/movie.selectors';
import { AppState } from '../state/app.state';
import { debounce } from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public shimmer = Array.from(Array(28).keys());

  public allMovies$ = this.store.select(selectAllMovies);
  public page$ = this.store.select(getPage);
  public loading: boolean = false;
  private pageIndex: number = 1;

  debouncedScrollHandler = debounce(this.scrollHandler, 300);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.loading = true;
    this.page$.subscribe((index) => {
      this.store.dispatch(loadMoviesByPage({ index }));
      this.pageIndex = index;
    });

    this.allMovies$.subscribe(() => {
      setTimeout(() => (this.loading = false), 1000);
    });
  }

  scrollHandler(event: any) {
    this.pageIndex++;
    this.store.dispatch(loadMoviesByPage({ index: this.pageIndex }));
  }
}
