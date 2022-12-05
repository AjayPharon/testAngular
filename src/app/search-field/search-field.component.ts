import { Component, Input } from '@angular/core';
import { Imovie } from '../imovie';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements Imovie{
  NameMovie: string = '';
  TypeMovie: string = '';
  MoviePrice: number = 0;
  Movieid: string = '';
  ngOnInit(): void {
    console.log(`this is search`)
  }
movieId : string = ''
nData : any;

getData(data : any){
  this.nData = data
  console.log(this.nData)
  this.NameMovie = data.NameMovie
  this.Movieid = data.Movieid
  this.MoviePrice = data.MoviePrice
  this.TypeMovie = data.TypeMovie

}

}
