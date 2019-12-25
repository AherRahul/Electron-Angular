import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.scss']
})
export class BackOfficeComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  btnClick= function () {
    this.router.navigateByUrl('/');
  };
}
