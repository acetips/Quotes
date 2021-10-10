import { Quote } from '../quote';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input()quote!:Quote;
  @Output()deleteQuote= new EventEmitter<boolean>()

  deleteAQuote(removeQuote: boolean){
    this.deleteQuote.emit(removeQuote);
  }

  faDown = faThumbsDown;
  faUp = faThumbsUp;

  upvote = 0;
  like () {
    this.upvote++;
  }
  downvote = 0;
  dislike () {
    this.downvote++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
