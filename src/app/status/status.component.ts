import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  userData: any;


  constructor(private  _AuthService:  AuthService) {
    this.userData = _AuthService.userData
  }

  ngOnInit() 
  {}

  logOut()
  {
    this._AuthService.SignOut()
  }

}
