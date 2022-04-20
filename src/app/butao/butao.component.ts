import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-butao',
  templateUrl: './butao.component.html',
  styleUrls: ['./butao.component.css'],
})
export class ButaoComponent implements OnInit {
  @Input() cor: string;
  @Input() nome: string;
  @Input() outline: boolean;
  @Input() size: 'small' | 'normal' | 'big' = 'normal';

  getsizeButtonSize() {
    switch (this.size) {
      case 'small':
        return 'btn-sm';
      case 'normal':
        return '';
      case 'big':
        return 'btn-lg';
    }
  }

  @Output() clicked = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
