import { Injectable } from '@angular/core';
import {Card, firstCards} from '../classes/card';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) { }

  // getCards(): Observable<Card[]> {
  //   return of(firstCards);
  // }

  getCards(): Observable<any> {
    return this.http.get('../../assets/cards.json');
  }
}
