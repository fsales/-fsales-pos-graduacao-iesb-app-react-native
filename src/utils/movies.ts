
export function getListMovies(size: number, movies: Array<any>): Array<any> {
  let popularMovies = Array<any>();

  for (let i = 0, l = size; i < l; i++) {
    popularMovies.push(movies[i]);
  }

  return popularMovies;
}

export function getMovieBannerMovie(movies: Array<any>): any {
  let indice: number = Math.floor(Math.random() * movies.length);

  return movies[indice];
}
