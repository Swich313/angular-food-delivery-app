import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LayoutModule } from './components/ui/layout/layout.module'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { HeaderModule } from './components/ui/layout/header/header.module'
import { SaleComponent } from './components/screens/sale/sale.component'
import { FavouritesComponent } from './components/screens/favourites/favourites.component'
import { ProfileComponent } from './components/screens/profile/profile.component'
import { HttpClientModule } from '@angular/common/http'
import { HomeModule } from './components/screens/home/home.module'

@NgModule({
  declarations: [
    AppComponent,
    SaleComponent,
    FavouritesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NoopAnimationsModule,
    HeaderModule,
    HttpClientModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
