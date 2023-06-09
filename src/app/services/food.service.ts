import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment.development'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor(private http: HttpClient) {
    console.log(environment.foodApiKey)
  }

  getAll() {
    return this.http.get('')
  }
}
