import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario2',
  templateUrl: './scenario2.component.html',
  styleUrls: ['./scenario2.component.css']
})
export class Scenario2Component implements OnInit {

  onClick(_name) {
    console.log(_name);
  }
  constructor() { }

  ngOnInit() {
  }

}
