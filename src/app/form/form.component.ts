import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { EnterQuote } from '../enter-quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  thequote!: string;
  quoteauthor!: string;
  quotepublisher!: string;

  newQuote: any;

  newQuotes=[
    new EnterQuote('Life is what happens when you are busy making other plans.','John Lennon','Submitted by Winnstar',new Date(2021,9,10))
  ]


  submitQuote(){
    // console.log("Quote Submitted")
    this.newQuote=new EnterQuote(this.thequote,this.quoteauthor,this.quotepublisher,new Date());
    this.newQuotes.push(this.newQuote);

  }

  // @Output()deleteQuote= new EventEmitter<boolean>()

  // deleteAQuote(removeQuote: boolean){
  //   this.deleteQuote.emit(removeQuote);
  // }

  deleteThisQuote(deleteQuote: any, index: any){
    if(deleteQuote){
      this.newQuotes.splice(index, 1)
    }
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
