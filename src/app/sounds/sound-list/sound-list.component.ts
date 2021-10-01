import { Component, OnInit } from '@angular/core';
import {Sound} from "../models/sounds.models";
import {SoundsService} from "../sounds.service";
import {faPlay, faTag} from "@fortawesome/free-solid-svg-icons";
import {PlayerService} from "../player/player.service";

@Component({
  selector: 'app-sound-list',
  templateUrl: './sound-list.component.html',
  styleUrls: ['./sound-list.component.css']
})
export class SoundListComponent implements OnInit {
  playIcon = faPlay
  tagIcon = faTag

  recentSounds: Sound[] = [];

  constructor(private service: SoundsService, private player: PlayerService) { }

  ngOnInit(): void {
    this.service.listRecent().subscribe((sounds) => {
      this.recentSounds = sounds;
    });
  }

  playSound(sound: Sound) {
    sound.plays++;
    this.player.playSound(sound.id);
  }

}
