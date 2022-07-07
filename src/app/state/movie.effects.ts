import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadMoviesByPage,
  loadMovies,
  loadMoviesByCategoryA,
  loadMoviesByCategoryB,
  fetchUpcomingMovies,
  fetchNowPlayingMovies,
} from './movie.actions';
import { MovieService } from '../movie.service';
import { switchMap, map, catchError } from 'rxjs/operators';
import { from, EMPTY } from 'rxjs';

@Injectable()
export class MovieEffects {
  constructor(private actions$: Actions, private movieService: MovieService) {}

  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadMoviesByPage),
      switchMap(({ index }) =>
        from(this.movieService.getMovies(index)).pipe(
          map((movies) => loadMovies({ movies })),
          catchError(() => EMPTY)
        )
      )
    );
  });

  loadMoviesByCategoryA$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchUpcomingMovies),
      switchMap(() =>
        from(this.movieService.getUpcomingMovies()).pipe(
          map((moviesByCategoryA) =>
            loadMoviesByCategoryA({ moviesByCategoryA })
          ),
          catchError(() => EMPTY)
        )
      )
    );
  });

  loadMoviesByCategoryB$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchNowPlayingMovies),
      switchMap(() =>
        from(this.movieService.getNowPlayingMovies()).pipe(
          map((moviesByCategoryB) =>
            loadMoviesByCategoryB({ moviesByCategoryB })
          ),
          catchError(() => EMPTY)
        )
      )
    );
  });
}
