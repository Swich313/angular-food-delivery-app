import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { FiltersComponent } from './filters/filters.component';
import { SearchComponent } from './search/search.component';
import { FoodService } from '../../../services/food/food.service'



@NgModule({
  declarations: [
    HomeComponent,
    FoodItemComponent,
    FiltersComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
