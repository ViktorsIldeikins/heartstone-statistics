import { Injectable } from '@angular/core';
import { CardClasses } from '../classes/cardClasses';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private classFilter;

  constructor() { }

  setClassFilter(cardClass: CardClasses): void {
    this.classFilter = cardClass;
    console.log(cardClass);
  }
}
