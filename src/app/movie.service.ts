import { Injectable } from '@angular/core';

const apikey = '338e6f6879358e3e57804f4aaa7d0269';
const baseURL = 'https://api.themoviedb.org/3/';

// https://api.themoviedb.org/3/movie/now_playing?api_key=338e6f6879358e3e57804f4aaa7d0269&language=en-US&page=1
//  https://api.themoviedb.org/3/movie/upcoming?api_key=338e6f6879358e3e57804f4aaa7d0269&language=en-US&page=1

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  counter = 1;

  async getMovies(index: number): Promise<any[]> {
    const res: any = await fetch(
      `${baseURL}list/${index}?api_key=${apikey}&language=en-US`
    );
    const data = await res.json();
    return Promise.resolve(data.items);
  }

  async getNowPlayingMovies(): Promise<any[]> {
    const res: any = await fetch(
      `${baseURL}movie/now_playing?api_key=${apikey}&language=en-US&page=1`
    );
    const data = await res.json();
    return Promise.resolve(data.results);
  }

  async getUpcomingMovies(): Promise<any[]> {
    const res: any = await fetch(
      `${baseURL}movie/upcoming?api_key=${apikey}&language=en-US&page=1`
    );
    const data = await res.json();
    return Promise.resolve(data.results);
  }
}
