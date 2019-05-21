import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { PlayerEntryComponent } from './player-entry/player-entry.component';

const routes: Routes = [
  { path: '', redirectTo: '/leaderBoard', pathMatch: 'full'},
  { path: 'leaderBoard', component: LeaderBoardComponent },
  { path: 'playerEntry/:playerName', component: PlayerEntryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
