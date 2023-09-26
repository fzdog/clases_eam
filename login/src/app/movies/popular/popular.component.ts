import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Contants } from 'src/app/constants/constants';
import { Movie } from '../movie';
import { SwalUtils } from 'src/app/utils/swal-utils';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  movies!: Movie[];
  currentPage: number = 1
  baseImageUrl = Contants.URL_BACKDROP_SIZE_W300
  constructor(private moviesService: MoviesService) {

  }

  ngOnInit(): void {
    this.getNowPlaying()
  }

  getNowPlaying() {
    this.moviesService.getNowPlaying().subscribe((res) => {
      console.log(res);
      if (res) {
        this.currentPage = res.page
        this.movies = res.results
        console.log(this.movies);
      } else {
        SwalUtils.customMessageError("Error", "No se encontratron datos")
      }
    }, (error) => {
      console.log(error);
      SwalUtils.customMessageError("Error", "Error al consultar los datos")
    })
  }
}
