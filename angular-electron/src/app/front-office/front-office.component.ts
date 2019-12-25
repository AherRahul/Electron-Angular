import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-office',
  templateUrl: './front-office.component.html',
  styleUrls: ['./front-office.component.scss']
})
export class FrontOfficeComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  btnClick= function () {
    this.router.navigateByUrl('/');
  };
}
