import { Component } from "@angular/core";
import { Movies } from "../movie.datasource";
import { Movie } from "../movie";

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  title = "List of Movies";
  movies = Movies;
  selectedMovie: Movie | null = null; // Başlangıçta null değeri atanmış

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }
}
