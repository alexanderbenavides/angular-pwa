import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl = 'https://movies-app1.p.rapidapi.com/api';
  private headers = new HttpHeaders(
    {
      'X-RapidAPI-Host':'movies-app1.p.rapidapi.com',
     'X-RapidAPI-Key':'e8c5750b43msha7ed56d3ebd9520p173f88jsn562fca3360ed'
    }
    );  
  constructor(private http: HttpClient) { }

  searchMovies(query: string): Observable<any> {    
    return this.http.get(this.baseUrl + '/movies', {headers: this.headers, params: {query} }).pipe( map((res: any) => res.results) );
  }

  searchMovieDetails(moviId: string): Observable<any> {
    return this.http.get(this.baseUrl + '/movie' + '/' + moviId, { headers: this.headers}).pipe( map((res: any) => res.result));
  }
}
