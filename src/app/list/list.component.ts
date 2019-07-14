import { Component, OnInit } from '@angular/core';
import { firstCards } from '../cards';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cards = firstCards;

  constructor() { }

  ngOnInit() {
  }

}
