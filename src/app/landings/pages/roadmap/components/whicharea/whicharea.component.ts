import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-whicharea',
  templateUrl: './whicharea.component.html',
  styleUrls: ['./whicharea.component.scss']
})
export class WhichareaComponent implements OnInit {
  @Input() bubble1;
  @Input() bubble;
  @Input() isbubble1Show;
  @Input() isbubble1child1Show;
  @Input() quest;
  @Output() goToPage = new EventEmitter<any>();
  @Output() resetBubble1 = new EventEmitter<any>();
  @Output() setChildBubbleShow = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

}
