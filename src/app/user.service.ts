const API_URI = "https://randomuser.me/api?inc=gender,name,picture,location&results=8&nat=gb";

import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  getUsers() {
    return this.http.get(API_URI)
      .map(response => response.json())
      .map(response => response.results)
      .map(users => users.map(u => {
        return {
          name: u.name.first + " " + u.name.last,
          image: u.picture.large,
          geo: u.location.city + " " + u.location.state + " " + u.location.street
        }
      }));
  }
}
