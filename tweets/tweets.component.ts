import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweets';
import { TweetsService } from '../tweets.service';
import { Comments } from '../comments';
import { CommentsService} from '../comments.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  tweets: Tweet[];
  comments: Comment[];

  getTweets(): void {
    this.tweets = this.tweetsService.getTweets();
  }

  getComments(): void {
  	this.comments = this.commentsService.getComments();
  }

  constructor(private tweetsService: TweetsService, private commentsService: CommentsService) { }

  ngOnInit() {
     this.getTweets();
     this.getComments();
  }

}
