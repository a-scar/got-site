import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-player-entry',
  templateUrl: './player-entry.component.html',
  styleUrls: ['./player-entry.component.css']
})
export class PlayerEntryComponent implements OnInit, OnDestroy {
  pdfSrc: string;
  private sub: any;
  playerName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.playerName = params['playerName'];
    });

    this.pdfSrc = '../assets/player_' + this.playerName + '.pdf';
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
