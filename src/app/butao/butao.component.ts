import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-butao',
  templateUrl: './butao.component.html',
  styleUrls: ['./butao.component.css'],
})
export class ButaoComponent implements OnInit {
  @Input() cor: string;
  @Input() badge: string;
  @Input() corBadge: string;
  @Input() outline: boolean;
  @Input() cornerBadge: boolean;
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

  getCornerBadge(): string {
    if (this.cornerBadge) {
      return 'position-absolute top-0 start-100 translate-middle badge rounded-pill';
    } else {
      return 'badge';
    }
  }

  @Output() clicked = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
