

import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private API_URI = "https://randomuser.me/api?inc=gender,name,picture,location&nat=gb";

  private size = 8;

  constructor(private http: Http) {
  }
  getSize(){
    return this.size;
  }
  setSize(size){
    this.size = size;
  }

  getUsers() {
    return this.http.get(this.API_URI + `&results=${this.size}`)
      .map(response => response.json())
      .map(response => response.results)
      .map(users => users.map(u => {
        return {
          name: u.name.first + " " + u.name.last,
          image: u.picture.large,
          geo: {
            state: u.location.state,
            city: u.location.city,
            street: u.location.street
          },
        }
      }));
  }
}
