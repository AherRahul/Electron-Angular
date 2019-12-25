import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-pannel',
  templateUrl: './admin-pannel.component.html',
  styleUrls: ['./admin-pannel.component.scss']
})
export class AdminPannelComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  btnClick= function () {
    this.router.navigateByUrl('/');
  };
}
