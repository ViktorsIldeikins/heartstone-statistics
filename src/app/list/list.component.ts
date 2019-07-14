import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private cards;

  constructor(private cardService: CardsService) {}

  private static formatResponse(response) {
    return response.slice(0, 200).map(card => ({...card, class: card.cardClass.toLocaleLowerCase()}));
  }

  ngOnInit(): void {
    this.cardService.getCards().subscribe(response => {
      this.cards = ListComponent.formatResponse(response);
    });
  }
}
