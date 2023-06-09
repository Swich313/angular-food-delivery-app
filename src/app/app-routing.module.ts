import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/screens/home/home.component'
import { SaleComponent } from './components/screens/sale/sale.component'
import { FavouritesComponent } from './components/screens/favourites/favourites.component'
import { ProfileComponent } from './components/screens/profile/profile.component'

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'sale', component: SaleComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'profile', component: ProfileComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
