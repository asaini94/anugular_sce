import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-s6component1',
  templateUrl: './s6component1.component.html',
  styleUrls: ['./s6component1.component.css']
})
export class S6component1Component implements OnInit {

  // constructor() { }

  // ngOnInit() {
  // }
  message: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }
}
