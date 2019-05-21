import { Injectable } from '@angular/core';
import { Player } from './leader-board/player';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private PlayersUrl = '/api/players';
  private players: Player[] = [];

  constructor(private http: HttpClient) {}

  getPlayers() {
    this.players = [
      {name: 'Mike', score: '24'},
      {name: 'Jenna_1', score: '22'},
      {name: 'Ian', score: '21'},
      {name: 'Tom', score: '21'},
      {name: 'Eric_Moffet', score: '21'},
      {name: 'Jenna_2', score: '21'},
      {name: 'Teresa_1', score: '20'},
      {name: 'Teresa_2', score: '19'},
      {name: 'Cindy', score: '18'},
      {name: 'Derrick_1', score: '17'},
      {name: 'Dennis', score: '17'},
      {name: 'Eric_Lee', score: '15'},
      {name: 'Marina', score: '14'},
      {name: 'Anthony', score: '14'},
      {name: 'Jason', score: '14'},
      {name: 'Alisa', score: '13'},
      {name: 'Gari', score: '12'},
      {name: 'Angela', score: '11'},
      {name: 'Gennifer', score: '10'}
    ];
    return [...this.players];
  }
}

