import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SongResponse } from '../components/song/song.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  searchSongs(search: string, media: 'movie'| 'musicVideo'): Observable<SongResponse> {
    const path = `https://itunes.apple.com/search?term=${search}&media=${media}`;
    return this.http.get<SongResponse>(path);
  }
}
