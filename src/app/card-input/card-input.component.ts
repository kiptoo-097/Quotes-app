import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.css']
})
export class CardInputComponent implements OnInit {
  quotes = [
    new Quote('Peter Theil', 'Genius', 'We live in a world in which courage is in less supply than genius', 'Kennedy', new Date(2020, 7, 7)),
    new Quote('Ludwing van-beetoken', 'Music', 'Music is a higher revelation than all wisdom and philosophy', 'Peter Theil', new Date(2020, 8, 21)),
  ]
  i: number;
  constructor() { }

  ngOnInit(): void {
  }
  thumbsup(i) {
    this.quotes[i].thumbsup++
  }
  thumbsdown(i) {
    this.quotes[i].thumbsdown++
  }
  saveQuote(newQuote) {
    this.quotes.push(newQuote);
  }
}
