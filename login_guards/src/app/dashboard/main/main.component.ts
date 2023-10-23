import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { SwalUtils } from '../../utils/swal-utils';
import { Movie } from './movie';
import { Contants } from '../../constants/constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private mainService: MainService) {

  }

}
