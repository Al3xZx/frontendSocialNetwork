import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-msg-err',
  templateUrl: './msg-err.component.html',
  styleUrls: ['./msg-err.component.css']
})
export class MsgErrComponent implements OnInit {

  @Input() msg: string;

  constructor() { }

  ngOnInit(): void {
  }

}
