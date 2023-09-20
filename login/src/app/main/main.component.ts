import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Movie } from './movies';
import { SwalUtils } from '../utils/swal-utils';
import { Contants } from '../constants/constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  movies: Movie[] = []
  URL_IMAGES = Contants.URL_BACKDROP_SIZE_W300
  constructor(private mainService: MainService) {
    
  }

  ngOnInit(): void {
    this.mainService.getMovies().subscribe((res) => {
      if (res) {
        this.movies = res.results
      } else {
        this.movies = []
        SwalUtils.customMessageError("Error","Error al capturar datos")
      }
      
      console.log(this.movies );
        
      })
  }

}
