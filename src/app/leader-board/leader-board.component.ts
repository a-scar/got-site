import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../players.service';
import { Player } from './player';


@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent implements OnInit {
  players: Player[];

  constructor(playerService: PlayersService) {
    this.players = playerService.getPlayers();
  }

  ngOnInit() {
  }

}
