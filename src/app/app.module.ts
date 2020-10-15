import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { CreditsComponent } from '@src/app/credits/credits.component';
import { MenuComponent } from '@src/app/menu/menu.component';
import { TileComponent } from '@src/app/tile/tile.component';
import { DetailComponent } from '@src/app/detail/detail.component';
import { ModalComponent, NgbdModalContent } from '@src/app/modal/modal.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreditsComponent,
    MenuComponent,
    TileComponent,
    DetailComponent,
    ModalComponent,
    NgbdModalContent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    NgbdModalContent
  ]
})
export class AppModule { }
