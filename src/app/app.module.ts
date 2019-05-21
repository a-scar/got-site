import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PlayerEntryComponent } from './player-entry/player-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaderBoardComponent,
    SiteHeaderComponent,
    PlayerEntryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
