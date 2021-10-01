import { Component, OnInit } from '@angular/core';
import {PlayerService} from "./player.service";
import {faPlay} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'playback-controls',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  playIcon = faPlay

  player = new Audio();

  constructor(private service: PlayerService) { }

  ngOnInit(): void {
    this.service.ee.subscribe((soundId) => {
      this.player.src = `http://localhost:3000/sounds/play/${soundId}`;
      // this.player.load();

      this.player.play();
    });
  }

}
