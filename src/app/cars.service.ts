import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";

export interface Car{
  name: string;
  id: number;
}

@Injectable()
export class CarsService {
  private DB =  "http://localhost:3000";
  constructor(private httpClient: HttpClient) {
  }

  getCars() : Observable<Car[]> {
    return this.httpClient.get<Car[]>(`${this.DB}/cars`);
  }

  updateFirstCar(car: Car) : Observable<any> {
    return this.httpClient.put<Car>(`${this.DB}/cars/${car.id}`,car);
  }
}
