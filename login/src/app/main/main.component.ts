import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { SwalUtils } from '../utils/swal-utils';
import { Movie } from './movie';
import { Contants } from '../constants/constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  movies!: Movie[];
  baseImageUrl= Contants.URL_BACKDROP_SIZE_W300
  constructor(private mainService: MainService) {

  }

  ngOnInit(): void {
    this.getNowPlaying()
  }

  getNowPlaying() {
    this.mainService.getNowPlaying().subscribe((res) => {
      console.log(res);
      if (res) {
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
