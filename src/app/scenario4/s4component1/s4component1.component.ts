import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-s4component1',
  templateUrl: './s4component1.component.html',
  styleUrls: ['./s4component1.component.css']
})
export class S4component1Component implements OnInit {

  @Output() displayData = new EventEmitter();
  private msg: string;
  constructor() { }

  ngOnInit() {
  }

  onChange(data: string) {
    this.msg = data;
    this.displayData.emit(this.msg);
  }
}
