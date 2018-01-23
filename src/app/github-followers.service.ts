import { DataService } from './services/data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GithubFollowersService extends DataService {

  constructor(http: Http) {
    super('https://api.github.com/users/mosh-hamedani/followers', http);
   }

}
