import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Sound} from "./sounds.models";

@Injectable({
  providedIn: 'root'
})
export class SoundsService {

  constructor(private http: HttpClient) { }

  listRecent(): Observable<Sound[]> {
    return this.http.get<Sound[]>('http://localhost:3000/sounds/list');
  }

  getSound(soundId: number): Observable<Sound> {
    return this.http.get<Sound>(`http://localhost:3000/sounds/${soundId}`);
  }

}
