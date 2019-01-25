import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-s5component2',
  templateUrl: './s5component2.component.html',
  styleUrls: ['./s5component2.component.css']
})
export class S5component2Component implements OnInit {

  @Input() parentVar: string;
  constructor() { }

  ngOnInit() {
  }

}
