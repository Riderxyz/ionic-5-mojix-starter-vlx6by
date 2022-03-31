import {
  SongModel,
  SongModelForCards,
} from './../../components/song/song.model';
import {
  AfterViewInit,
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { SongResponse } from 'src/app/components/song/song.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnChanges, AfterViewInit {
  searchTerm = '';
  songsList: SongModelForCards[] = [];
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    /*     const artist = 'Shakira';
    const media = 'musicVideo'; // Or movie
    this.api.searchSongs(artist, media).subscribe(
      (data: SongResponse) => {
        console.log('Data', data);
        console.log('Data', data.results[0]);
        this.songsList = data.results;
      },
      error => {}
    ); */
  }
  ngOnChanges(changes: SimpleChanges): void {}

  ngAfterViewInit() {}

  fireSearch() {
    console.log('Carregando?');
    this.loadData(this.searchTerm);
  }

  loadData(artistName) {
    this.songsList = [];
    const media = 'musicVideo'; // Or movie
    this.api.searchSongs(artistName, media).subscribe(
      (data: SongResponse) => {
        console.log('Data', data);
        console.log('Data', data.results[0]);
        data.results.forEach((el) => {
          const transformed: SongModelForCards = el as any;
          transformed.isItOpen = false;
          this.songsList.push(transformed);
        });
      },
      (error) => {}
    );
  }

}
