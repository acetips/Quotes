import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { EnterQuote } from '../enter-quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[]=[
    new Quote('First Quote','The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela','Submitted by Emelda Perez',new Date(2021,9,9)),
    new Quote('Second Quote','Your time is limited, so do not waste it living someone else life.','Steve Jobs','Submitted by Samantha Lopez',new Date(2021,9,9)),
    new Quote('Third Quote','The way to get started is to quit talking and begin doing.','Walt Disney','Submitted by Debbie Indah',new Date(2021,9,9)),
  ]

  thequote!: string;
  author!: string;
  publisher!: string;
  newQuote: any;

  newquote: EnterQuote[]=[
    new EnterQuote('Life is what happens when you are busy making other plans.','John Lennon','Winn Star',new Date(2021,9,9))
  ]

  showDetails(index: | any){
    this.quotes[index].showquoteDetails = !this.quotes[index].showquoteDetails;
  }

  deleteThisQuote(deleteQuote: any, index: any){
    if(deleteQuote){
      this.quotes.splice(index, 1)
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
