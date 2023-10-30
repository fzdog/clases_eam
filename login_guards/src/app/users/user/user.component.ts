import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  emailControl = new FormControl('', Validators.required)
  isAdmin = false;
  ngOnInit(): void {
    console.log('Entrando');

      this.validateUser()
  }


  validateUser() {
    const user = JSON.parse(sessionStorage.getItem('user')!)
    console.log(user);

    if (user) {
      if (user.role == 'admin') {
        this.isAdmin = true
      } else {
        this.isAdmin = false
      }
    }
  }
}
