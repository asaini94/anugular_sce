import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scenario4',
  templateUrl: './scenario4.component.html',
  styleUrls: ['./scenario4.component.css']
})
export class Scenario4Component implements OnInit {

  private parentVar: string;
  constructor() { }
  displayData(parentVar: string) {
    this.parentVar = parentVar;
  }
  ngOnInit() {
  }

}
