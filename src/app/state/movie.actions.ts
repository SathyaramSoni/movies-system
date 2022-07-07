import { createAction, props } from '@ngrx/store';

export const updatePage = createAction(
  '[Movie] updatePage',
  props<{ page: number }>()
);

export const loadMoviesByPage = createAction(
  '[Movie] Load Movies By Page',
  props<{ index: number }>()
);

export const loadMovies = createAction(
  '[Movie] Load Movies',
  props<{ movies: any[] }>()
);

export const fetchUpcomingMovies = createAction(
  '[Movie] Fetch Upcoming Movies'
);

export const fetchNowPlayingMovies = createAction(
  '[Movie] Fetch Now Playing Movies'
);

export const loadMoviesByCategoryA = createAction(
  '[Movie] Load Movies By Category A',
  props<{ moviesByCategoryA: any[] }>()
);

export const loadMoviesByCategoryB = createAction(
  '[Movie] Load Movies By Category B',
  props<{ moviesByCategoryB: any[] }>()
);
