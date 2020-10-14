import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { CreditsComponent } from '@src/app/credits/credits.component';
import { MenuComponent } from '@src/app/menu/menu.component';
import { TileComponent } from '@src/app/tile/tile.component';
import { DetailComponent } from '@src/app/detail/detail.component';
import { ModalComponent } from '@src/app/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreditsComponent,
    MenuComponent,
    TileComponent,
    DetailComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
