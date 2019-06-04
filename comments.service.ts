import { Injectable } from '@angular/core';
import { Comments } from './comments';
import { COMMENTS } from './mock-comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  getComments(): Comment[] {
    return COMMENTS;
  }
  
  constructor() { }
}
