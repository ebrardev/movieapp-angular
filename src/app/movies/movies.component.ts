import { Component, OnInit } from "@angular/core";
import { Movie } from "../movie";
import { MovieService } from "../movie.service";

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  title = "List of Movies";
  movies: Movie[] = [];
  selectedMovie: Movie | null = null; 

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies(); 
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }
  
  getMovies(): void {
    this.movieService.getMovies().subscribe(movies => this.movies = movies)
  }
}
