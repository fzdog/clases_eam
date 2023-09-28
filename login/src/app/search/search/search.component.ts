import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwalUtils } from 'src/app/utils/swal-utils';
import { SearchService } from '../search.service';
import { Movie } from 'src/app/movies/movie';
import { Contants } from 'src/app/constants/constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchKeyword: string = ""
  movies:Movie[]=[]
  baseImageUrl = Contants.URL_BACKDROP_SIZE_W300
  constructor(private activatedRoute:ActivatedRoute,private searchService: SearchService) {

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.searchKeyword = params['keyword']
      this.searchMovie()
    })

  }

  searchMovie() {
    this.searchService.getSeachMovie(this.searchKeyword).subscribe((res) => {
      this.movies = res.results
      console.log(this.movies);
    }, (error) => {
      SwalUtils.customMessageError('Error', "Error en la consulta")
    })
  }



}
