import { Component, OnInit } from '@angular/core'
import { FoodService } from '../../../services/food/food.service'
import { IFood } from '../../../services/food/food.interface'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  food: IFood[] = []

  constructor(private foodService: FoodService) {
  }

  ngOnInit(): void {
    this.foodService.getAll().subscribe(data => {
      this.food = data;
      console.log(this.food)

    })
  }
}
