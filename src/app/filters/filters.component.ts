import { Component, OnInit } from '@angular/core';
import { CardClasses } from '../classes/cardClasses';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  public allClasses: CardClasses;
  private classes;

  constructor(private filterService: FilterService) { }

  ngOnInit() {
    const strings = Object.keys(CardClasses);
    console.log(strings);
    const classes = strings.filter(value => (typeof CardClasses[value as any]) === 'number');
    console.log(classes);
    this.classes = classes;
  }

  onClassFilterChange(classFilter: any): void {
    console.log(typeof classFilter);
    console.log(classFilter);
    // console.log(classFilter instanceof CardClasses);
    this.filterService.setClassFilter(classFilter);
  }
}
