import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  ee: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  playSound(soundId: number) {
    this.ee.emit(soundId);
  }
}
