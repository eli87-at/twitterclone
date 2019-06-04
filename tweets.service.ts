import { Injectable } from '@angular/core';
import { Tweet } from './tweets';
import { TWEETS } from './mock-tweets';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {
  getTweets(): Tweet[] {
    return TWEETS;
  }
  
  constructor() { }
}
