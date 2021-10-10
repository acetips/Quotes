import { Component, OnInit } from '@angular/core';
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
    new EnterQuote('Life is what happens when you are busy making other plans.','John Lennon','Submitted by Winnstar')
  ]


  submitQuote(){
    this.newQuote=new EnterQuote(this.thequote,this.quoteauthor,this.quotepublisher);
    this.newQuotes.push(this.newQuote);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
