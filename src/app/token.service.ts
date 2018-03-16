import {Injectable} from "@angular/core";

@Injectable()
export class TokenService{
  private TOKEN = btoa('tokent_tokent_tra-ta-at');

  getToken(){
    return this.TOKEN;
  }
}
