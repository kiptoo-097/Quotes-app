import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.css']
})
export class CardInputComponent implements OnInit {
  quotes:Quote[] = [
    // new Quote('Peter Theil', 'Education', 'The more that you read, the more things you will know, the more that you learn, the more places you’ll go.', ' Dr. Seuss', new Date(2020, 9, 7)),
     new Quote('Kiptoo Kennedy','Education', ' Education is not preparation for life; education is life itself.', 'John Dewey', new Date(2020, 9, 21)),
    new Quote('Hakim','Education', 'Music expresses that which cannot be said and on which it is impossible to be silent.', 'Victor Hugo', new Date(2020, 9, 21)),
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
    this.quotes.unshift(newQuote);
  }
  // delete(i){
  //   this.quotes.splice(i, 1);
  // }
}
