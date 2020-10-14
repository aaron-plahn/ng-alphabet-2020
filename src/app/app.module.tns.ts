import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { CreditsComponent } from '@src/app/credits/credits.component';
import { MenuComponent } from '@src/app/menu/menu.component';
import { TileComponent } from '@src/app/tile/tile.component';
import { DetailComponent } from '@src/app/detail/detail.component';
import { MenuTileComponent } from '@src/app/menu-tile/menu-tile.component';
import { ModalComponent } from '@src/app/modal/modal.component';


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreditsComponent,
    MenuComponent,
    TileComponent,
    DetailComponent,
    MenuTileComponent,
    ModalComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
