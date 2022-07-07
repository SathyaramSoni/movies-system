import { Component, OnInit } from '@angular/core';
import {
  selectAllMoviesCategoryA,
  selectAllMoviesCategoryB,
} from '../state/movie.selectors';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import {
  fetchUpcomingMovies,
  fetchNowPlayingMovies,
} from '../state/movie.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public shimmer = Array.from(Array(28).keys());
  public allMoviesCategoryA$ = this.store.select(selectAllMoviesCategoryA);
  public allMoviesCategoryB$ = this.store.select(selectAllMoviesCategoryB);
  public loadingCatA: boolean = false;
  public loadingCatB: boolean = false;

  constructor(private store: Store<AppState>) {}

  refreshMovies(type: string) {
    if (type === 'UM') {
      this.loadingCatA = true;
      this.store.dispatch(fetchUpcomingMovies());
      return;
    }
    this.loadingCatB = true;
    this.store.dispatch(fetchNowPlayingMovies());
  }

  ngOnInit(): void {
    this.store.dispatch(fetchNowPlayingMovies());

    this.store.dispatch(fetchUpcomingMovies());

    this.loadingCatA = true;

    this.allMoviesCategoryA$.subscribe(() => {
      setTimeout(() => (this.loadingCatA = false), 1000);
    });

    this.loadingCatB = true;

    this.allMoviesCategoryB$.subscribe(() => {
      setTimeout(() => (this.loadingCatB = false), 1000);
    });
  }
}
