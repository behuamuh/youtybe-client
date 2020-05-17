import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-widget',
  templateUrl: './auth-widget.component.html',
  styleUrls: ['./auth-widget.component.scss']
})
export class AuthWidgetComponent implements OnInit {
  isUserLoggedIn = false;
  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.isUserLoggedIn = !this.isUserLoggedIn;
  }

}
