import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[]=[
    new Quote('First Quote','"The greatest glory in living lies not in never falling, but in rising every time we fall."','Nelson Mandela','Emelda Perez'),
    new Quote('Second Quote','"Your time is limited, so do nott waste it living someone else life."','Steve Jobs','Samantha Lopez'),
    new Quote('Third Quote','"The way to get started is to quit talking and begin doing."','Walt Disney','Debbie Indah'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
