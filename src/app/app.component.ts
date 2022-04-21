import { Component, OnInit, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  contador = 0;

  users: any[];

  page: number = 1;

  onButtonClick() {
    this.contador++;
    console.log(this.contador);
  }

  ngOnInit(): void {
    this.UserService.getUser(this.page).subscribe((objResult) => {
      this.users = objResult.results;
    });
  }

  pageProx(): void {
    this.page++;
    this.ngOnInit();
  }

  pageAnt(): void {
    this.page--;
    this.ngOnInit();
  }

  constructor(public UserService: UserService) {}
}
