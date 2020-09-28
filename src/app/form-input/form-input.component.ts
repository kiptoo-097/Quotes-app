import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  name: any;
  title: string;
  quote: string;
  author: any;
  date: string;
  newQuote: any;
  @Output () emitNewQuote = new EventEmitter

i: number;

  constructor() { }

  ngOnInit(): void {
  }
  onSave() {
   this.newQuote = new Quote(this.author, this.name, this.quote,this.title, this.date); 
    this.emitNewQuote.emit(this.newQuote)
  }

}
