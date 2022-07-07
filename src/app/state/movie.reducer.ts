import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import {
  loadMovies,
  loadMoviesByCategoryA,
  loadMoviesByCategoryB,
  updatePage,
} from './movie.actions';

export interface MovieState {
  page: number;
  movies: any[];
  moviesByCategoryA: any[];
  moviesByCategoryB: any[];
}

export const initialState: MovieState = {
  page: 1,
  movies: [],
  moviesByCategoryA: [],
  moviesByCategoryB: [],
};

export const movieReducer = createReducer(
  initialState,
  on(loadMovies, (state, { movies }) => {
    return {
      ...state,
      movies: [...state.movies, ...movies],
    };
  }),

  on(loadMoviesByCategoryA, (state, { moviesByCategoryA }) => {
    return {
      ...state,
      moviesByCategoryA: moviesByCategoryA,
    };
  }),

  on(loadMoviesByCategoryB, (state, { moviesByCategoryB }) => {
    return {
      ...state,
      moviesByCategoryB: moviesByCategoryB,
    };
  }),

  on(updatePage, (state, { page }) => {
    return {
      ...state,
      page,
    };
  })
);
