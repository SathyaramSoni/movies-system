import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { MovieState } from './movie.reducer';

export const selectMovies = (state: AppState) => state.data;

export const selectAllMovies = createSelector(
  selectMovies,
  (state: MovieState) => state.movies
);

export const getPage = createSelector(
  selectMovies,
  (state: MovieState) => state.page
);

export const selectAllMoviesCategoryA = createSelector(
  selectMovies,
  (state: MovieState) => state.moviesByCategoryA
);

export const selectAllMoviesCategoryB = createSelector(
  selectMovies,
  (state: MovieState) => state.moviesByCategoryB
);
