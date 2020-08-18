import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input() items: Item[];

  constructor() { }

  ngOnInit() {
  }

  sort(column: string): void {
    this.items.sort(function(a: Item, b: Item): number {
       if(a[column] < b[column]) {
          return -1;
       } else if (a[column] > b[column]) {
          return 1;
       }
       return 0;
    });
 }

}

