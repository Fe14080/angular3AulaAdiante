import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  lista: string[] = ['carlos', 'joao', 'maria', 'bruno', 'pedro'];

  streamer: any[] = [
    {
      nome: 'Gaules',
      descricao: 'Teste Gaules',
      img: 'https://s2.glbimg.com/Yqf5nOCXmVHKKXYrGPfsJ-1WKZE=/0x0:1575x1138/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/i/Y/5ZrWZMTluyV0KYsGUbDA/foto-5-reproducao-twitter.jpg',
      data: new Date(),
    },
    {
      nome: 'Alan',
      descricao: 'Teste Alan',
      img: 'https://pbs.twimg.com/profile_images/944712346500587522/duOz-D8s_400x400.jpg',
      data: new Date(),
    },
  ];

  textoqualquer: string = 'Um texto qualquer';

  data: Date = new Date();

  valor: number = 12.13;

  urlimage: string =
    'https://static8.depositphotos.com/1003924/886/i/600/depositphotos_8868243-stock-photo-spectrum-multicolored-eye-macro.jpg';

  isSpecial: boolean = true;

  onKeyUp(event) {
    console.log(event.target.value);
  }

  getValor(): number {
    return 5;
  }

  getclassname(): string {
    return 'alert-warning';
  }
}
