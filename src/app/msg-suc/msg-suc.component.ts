import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-msg-suc',
  templateUrl: './msg-suc.component.html',
  styleUrls: ['./msg-suc.component.css']
})
export class MsgSucComponent implements OnInit {

  @Input() msg: string;

  constructor() { }

  ngOnInit(): void {
  }

}
