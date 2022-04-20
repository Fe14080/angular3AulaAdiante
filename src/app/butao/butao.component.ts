import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-butao',
  templateUrl: './butao.component.html',
  styleUrls: ['./butao.component.css'],
})
export class ButaoComponent implements OnInit {
  @Input() classe: string;
  @Input() nome: string;

  @Output() clicked = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
