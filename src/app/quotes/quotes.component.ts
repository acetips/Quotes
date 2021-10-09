import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[]=[
    new Quote('Nelson Mandela','The greatest glory in living lies not in never falling, but in rising every time we fall.','Emelda Perez'),
    new Quote('Steve Jobs','Your time is limited, so do nott waste it living someone else life.','Samantha Lopez'),
    new Quote('Walt Disney','The way to get started is to quit talking and begin doing.','Debbie Indah'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
