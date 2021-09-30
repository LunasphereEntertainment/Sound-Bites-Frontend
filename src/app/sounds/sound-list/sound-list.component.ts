import { Component, OnInit } from '@angular/core';
import {Sound} from "../sounds.models";
import {SoundsService} from "../sounds.service";
import {faPlay, faTag} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-sound-list',
  templateUrl: './sound-list.component.html',
  styleUrls: ['./sound-list.component.css']
})
export class SoundListComponent implements OnInit {
  playIcon = faPlay
  tagIcon = faTag

  recentSounds: Sound[] = [];

  constructor(private service: SoundsService) { }

  ngOnInit(): void {
    this.service.listRecent().subscribe((sounds) => {
      this.recentSounds = sounds;
    });
  }

}
