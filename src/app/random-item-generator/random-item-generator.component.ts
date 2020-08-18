import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-random-item-generator',
  templateUrl: './random-item-generator.component.html',
  styleUrls: ['./random-item-generator.component.css']
})
export class RandomItemGeneratorComponent implements OnInit {
  @Input() items: Item[];
  players = [];

  constructor() { }

  ngOnInit() {
  }

  randomItems(numberOfPlayers: number) {
    let commonItemsArray = [];
    let uncommonItemsArray = [];
    let legendaryItemsArray = [];
    let bossItemsArray = [];
    let allPlayerItems = [];

    for(let i = 0; i < this.items.length; i++) {
      if(this.items[i].rarity.toLowerCase() === "common") {
        commonItemsArray.push(this.items[i]);
      }
      else if(this.items[i].rarity.toLowerCase() === "uncommon") {
        uncommonItemsArray.push(this.items[i]);
      }
      else if(this.items[i].rarity.toLowerCase() === "legendary") {
        legendaryItemsArray.push(this.items[i]);
      }
      else {
        bossItemsArray.push(this.items[i]);
      }
    }
    
    for(let i = 0; i < numberOfPlayers; i++) {
      let randomItems = [];

      randomItems.push(commonItemsArray[Math.floor(Math.random()*commonItemsArray.length)]);
      randomItems.push(uncommonItemsArray[Math.floor(Math.random()*uncommonItemsArray.length)]);
      randomItems.push(legendaryItemsArray[Math.floor(Math.random()*legendaryItemsArray.length)]);
      randomItems.push(bossItemsArray[Math.floor(Math.random()*bossItemsArray.length)]);

      allPlayerItems.push(randomItems);
    }
    this.players = allPlayerItems;
  }
}