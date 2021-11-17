
export function getListMovies(size: number, movies: Array<any>): Array<any> {
  let popularMovies = Array<any>();

  for (let i = 0, l = size; i < l; i++) {
    popularMovies.push(movies[i]);
  }

  return popularMovies;
}
