import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie: any;
  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((resp: any) => {      
      this.moviesService.searchMovieDetails(resp.moviId).subscribe(response => {
        this.movie = response;
      })
    })
  }

  goBack() {
    this.location.back();
  }

}
