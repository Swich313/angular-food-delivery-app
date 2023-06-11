import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { IFood } from './food.interface'
import { environment } from '../../../environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  // private API_URL = 'http://localhost:3000/food';
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {
  }

    getAll() {
    return this.http.get<IFood[]>(this.API_URL)
  }
}
