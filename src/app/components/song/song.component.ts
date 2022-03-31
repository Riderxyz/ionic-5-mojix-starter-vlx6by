import { Component, Input, OnInit } from '@angular/core';
import { zoomInOnEnterAnimation } from 'angular-animations';
import { SongModel, SongModelForCards } from './song.model';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
  animations:[zoomInOnEnterAnimation()]
})
export class SongComponent implements OnInit {
  @Input() currentSong: SongModelForCards;

  constructor() {}

  ngOnInit(): void {}


  formatCardBackground(artistName: string) {
    let retorno = null;
    if (/([A-A])\w+/g.test(artistName)) {
      retorno = {
        '--background': '#ffff0080',
      };
    }
    if (/([E-E])\w+/g.test(artistName)) {
      retorno = {
        '--background': 'ff00000080',
      };
    }
    if (/([I-I])\w+/g.test(artistName)) {
      retorno = {
        '--background': '#0000ff0080',
      };
    }
    if (/([O-O])\w+/g.test(artistName)) {
      retorno = {
        '--background': '#00000080',
        '--color': '#fff',
      };
    }
    if (/([U-U])\w+/g.test(artistName)) {
      retorno = {
        '--background': '#00800080',
        '--color': '#fff',
      };
    }
    return retorno;
  }

  openDetails(item: SongModelForCards) {
    item.isItOpen = !item.isItOpen;
  }

  millisToMinutesAndSeconds(millis) {
    const minutes = Math.floor(millis / 60000);
    const seconds = Number(((millis % 60000) / 1000).toFixed(0));
    return seconds === 60
      ? minutes + 1 + ':00'
      : minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }
  formatReleasedDate(item: SongModelForCards) {
    const year = new Date(item.releaseDate).getFullYear();
    const month = new Date(item.releaseDate).getMonth() + 1;
    const day = new Date(item.releaseDate).getDate();
    return '' + day + '/' + month + '/' + year;
  }
}
