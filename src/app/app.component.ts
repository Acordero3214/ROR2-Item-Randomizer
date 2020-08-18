import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ROR2-Randomizer';
  itemList: Item[];
  displayList: Item[];

  constructor() {
    this.itemList = [
      new Item("Armor-Piercing Rounds", "Offensive", "Deal an additional 20% damage (+20% per stack) to bosses", "Common", "Linear"),
      new Item("Backup Magazine", "Utility", "Add +1 (+1 per stack) charge of your Secondary skill", "Common", "Linear"),
      new Item("Bundle of Fireworks", "Utility", "Activating an interactable launches 8 (+4 per stack) fireworks that deal 300% base damage", "Common", "Linear"),
      new Item("Bustling Fungus", "Healing", "After standing still for 2 seconds, create a zone that heals for 4.5% (+2.25% per stack) of your health every second to all allies within 3m (+1.5m per stack)", "Common", "Linear"),
      new Item("Cautious Slug", "Healing", "Increases base health regeneration by +4 hp/s (+4 hp/s per stack) while outside of combat", "Common", "Linear"),
      new Item("Crowbar", "Offensive", "Deal 150% (+50% per stack) damage to enemies above 90% health", "Common", "Linear"),
      new Item("Energy Drink", "Utility", "Sprint speed is improved by 30% (+20% per stack)", "Common", "Linear"),
      new Item("Focus Crystal", "Offensive", "Increase damage to enemies within 13m by 15% (+15% per stack)", "Common", "Linear"),
      new Item("Fresh Meat", "Healing", "Increases base health regeneration by +2 hp/s for 3s (+3s per stack) after killing an enemy", "Common", "Linear"),
      new Item("Gasoline", "Offensive", "Killing an enemy ignites all enemies within 12m (+4m per stack). Enemies burn for 150% (+75% per stack) base damage", "Common", "Linear"),
      new Item("Lens-Maker's Glasses", "Offensive", "Your attacks have a 10% (+10% per stack) chance to 'Critically Strike', dealing double damage", "Common", "Linear"),
      new Item("Medkit", "Healing", "2 seconds after getting hurt, heal for 20 plus an additional 5% (+5% per stack) of maximum health", "Common", "Linear"),
      new Item("Monster Tooth", "Healing", "Killing an enemy spawns a healing orb that heals for 8 plus an additional 2% (+2% per stack) of maximum health", "Common", "Linear"),
      new Item("Paul's Goat Hoof", "Utility", "Increases movement speed by 14% (+14% per stack)", "Common", "Linear"),
      new Item("Personal Shield Generator", "Defensive", "Gain a shield equal to 8% (+8% per stack) of your maximum health. Recharges outside of danger", "Common", "Linear"),
      new Item("Repulsion Armor Plate", "Defensive", "Reduce all incoming damage by 5 (+5 per stack). Cannot be reduced below 1", "Common", "Linear"),
      new Item("Rusted Key", "Utility", "A hidden cache containing an item will appear in a random location on each stage. (Increases rarity of the item per stack)", "Common", "Special"),
      new Item("Soldier's Syringe", "Offensive", "Increases attack speed by 15% (+15% per stack)", "Common", "Linear"),
      new Item("Sticky Bomb", "Offensive", "5% (+5% per stack) chance on hit to attach a bomb to an enemy, detonating for 180% TOTAL damage", "Common", "Linear"),
      new Item("Stun Grenade", "Offensive", "5% (+5% on stack) chance on hit to stun enemies for 2 seconds", "Common", "Hyberbolic"),
      new Item("Topaz Brooch", "Defensive", "Gain a temporary barrier on kill for 15 health (+15 per stack)", "Common", "Linear"),
      new Item("Tougher Times", "Defensive", "15% (+15% per stack) chance to block incoming damage. Unaffected by luck", "Common", "Hyperbolic"),
      new Item("Tri-Tip Dagger", "Offensive", "15% (+15% per stack) chance to bleed an enemy for 240% base damage", "Common", "Linear"),
      new Item("Warbanner", "Utility", "On level up or starting the Teleporter event, drop a banner that strengthens all allies within 16m (+8m per stack). Raise attack and movement speed by 30%", "Common", "Linear"),
      new Item("AtG Missle Mk. 1", "Offensive", "10% chance to fire a missile that deals 300% (+300% per stack) TOTAL damage", "Uncommon", "Linear"),
      new Item("Bandolier", "Utility", "18% (+10% per stack) chance on kill to drop an ammo pack that resets all skill cooldowns", "Uncommon", "special"),
      new Item("Berzerker's Pauldron", "Offensive", "Killing 3 enemies within 1 second sends you into a frenzy for 6s (+4s per stack). Increases movement speed by 50% and attack speed by 100%", "Uncommon", "Linear"),
      new Item("Chronobauble", "Utility", "Slow enemies on hit for -60% movement speed for 2s (+2s per stack)", "Uncommon", "Linear"),
      new Item("Death Mark", "Offensive", "Enemies with 4 or more debuffs are marked for death, increasing damage taken by 50% from all sources for 7 (+7 per stack) seconds", "Uncommon", "Linear"),
      new Item("Fuel Cell", "Utility", "Hold an additional equipment charge (+1 per stack). Reduce equipment cooldown by 15% (+15% per stack)", "Uncommon", "Linear Exponential"),
      new Item("Ghor's Tome", "Utility", "4% (+4% on stack) chance on kill to drop a treasure worth $25. Scales over time", "Uncommon", "Linear"),
      new Item("Harvester's Scythe", "Offensive", "Gain 5% critical chance. Critical strikes heal for 8 (+4 per stack) health", "Uncommor", "Linear None"),
      new Item("Hopoo Feather", "Utility", "Gain +1 (+1 per stack) maximum jump count", "Uncommon", "Linear"),
      new Item("Infusion", "Utility", "Killing an enemy increases your health permanently by 1 (+1 per stack), up to a maximum of 100 (+100 per stack) health", "Uncommon", "Linear"),
      new Item("Kjaro's Band", "Offensive", "Hits that deal more than 400% damage also blasts enemies with a runic flame tornado, dealing 300% (+300% per stack) TOTAL damage over time. Recharges every 10 seconds", "Uncommon", "Linear"),
      new Item("Leeching Seed", "Healing", "Dealing damage heals you for 1 (+1 per stack) health", "Uncommon", "Linear"),
      new Item("Lepton Daisy", "Healing", "Release a healing nova during the Teleporter event, healing all nearby allies for 50% of their maximum health. Occurs 1 (+1 per stack) times", "Uncommon", "Linear"),
      new Item("Old Guillotine", "Offensive", "Instantly kill Elite monsters below 13% (+13% per stack) health", "Uncommon", "Hyperbolic"),
      new Item("Old War Stealthkit", "Utility", "Chance on taking damage to gain 40% movement speed and invisibility for 3s (+1.5s per stack). Chance increases the more damage you take", "Uncommon", "Linear"),
      new Item("Predatory Instincts", "Offensive", "Critical strikes increase attack speed by 12%. Maximum cap of 36% (+24% per stack) attack speed. Note: Gain 5% critical chance", "Uncommon", "Linear None"),
      new Item("Razorwire", "Offensive", "Getting hit causes you to explode in a burst of razors, dealing 160% damage. Hits up to 5 (+2 per stack) targets in a 25m (+10m per stack) radius", "Uncommon", "Linear"),
      new Item("Red Whip", "Utility", "Leaving combat boosts your movement speed by 30% (+30% per stack)", "Uncommon", "Linear"),
      new Item("Rose Buckler", "Defensive", "Increase armor by 30 (+30 per stack) while sprinting", "Uncommon", "Linear"),
      new Item("Runald's Band", "Offensive", "Hits that deal more than 400% damage also blasts enemies with a runic ice blast, slowing them by 80% for 3s (+3s per stack) and dealing 250% (+250% per stack) TOTAL damage. Recharges every 10 seconds", "Uncommon", "Linear"),
      new Item("Squid Polyp", "Utility", "Activating an interactable summons a Squid Turret that attacks nearby enemies at 100% (+100% per stack) attack speed. Lasts 30 seconds", "Uncommon", "Linear"),
      new Item("Ukulele", "Offensive", "25% chance to fire chain lightning for 80% TOTAL damage on up to 3 (+2 per stack) targets within 20m (+2m per stack)", "Uncommon", "Linear"),
      new Item("War Horn", "Utility", "Activating your Equipment gives you +70% attack speed for 8s (+4s per stack)", "Uncommon", "Linear"),
      new Item("Wax Quail", "Utility", "Activating your Equipment gives you +70% attack speed for 8s (+4s per stack)", "Uncommon", "Linear"),
      new Item("Will-o'-the-wisp", "Offensive", "On killing an enemy, spawn a lava pillar in a 12m (+2.4m per stack) radius for 350% (+280% per stack) base damage", "Uncommon", "Linear"),
      new Item("57 Leaf Clover", "Utility", "All random effects are rolled +1 (+1 per stack) times for a favorable outcome", "Legendary", "Linear"),
      new Item("Aegis", "Healing", "Healing past full grants you a temporary barrier for 50% (+50% per stack) of the amount you healed", "Legendary", "Linear"),
      new Item("Alien Head", "Utility", "Reduce skill cooldowns by 25% (+25% per stack)", "Legendary", "Exponential"),
      new Item("Brainstalks", "Utility", "Upon killing an elite monster, enter a frenzy for 4s (+4s per stack) where skills have no cooldowns", "Legendary", "Linear"),
      new Item("Brilliant Behemoth", "Offensive", "All your attacks explode in a 4m (+2.5m per stack) radius for a bonus 60% TOTAL damage to nearby enemies", "Legendary", "Linear"),
      new Item("Ceremonial Dagger", "Offensive", "Killing an enemy fires out 3 homing daggers that deal 150% (+150% per stack) base damage", "Legendary", "Linear"),
      new Item("Dio's Best Friend", "Utility", "Upon death, this item will be consumed and you will return to life with 3 seconds of invulnerability", "Legendary", "Linear"),
      new Item("Frost Relic", "Offensive", "Killing an enemy surrounds you with an ice storm that deals 600% damage per second. The storm grows with every kill, increasing its radius by 1m. Stacks up to 6m (+6m per stack)", "Legendary", "Linear"),
      new Item("H3AD-5T v2", "Utility", "Increase jump height. Creates a 5m-100m radius kinetic explosion on hitting the ground, dealing 1000%-10000% base damage that scales up with speed. Recharges in 10 (-50% per stack) seconds", "Legendary", "Exponential"),
      new Item("Happiest Mask", "Utility", "Killing enemies has a 7% chance to spawn a ghost of the killed enemy with 1500% damage. Lasts 30s (+30s per stack)", "Legendary", "Linear"),
      new Item("Hardlight Afterburner", "Utility", "Add +2 (+2 per stack) charges of your Utility skill. Reduces Utility skill cooldown by 33%", "Legendary", "Linear"),
      new Item("Instellar Desk Plant", "Healing", "On kill, plant a healing fruit seed that grows into a plant after 5 seconds. The plant heals for 10% of maximum health every second to all allies within 5m (+5.0m per stack). Lasts 10 seconds", "Legendary", "Linear"),
      new Item("N'kuhana's Opinion", "Offensive", "Store 100% (+100% per stack) of healing as Soul Energy. After your Soul Energy reaches 10% of your maximum health, fire a skull that deals 250% of your Soul Energy as damage", "Legendary", "Linear"),
      new Item("Rejuvenation Rack", "Healing", "Heal +100% (+100% per stack) more", "Legendary", "Linear"),
      new Item("Resonance Disc", "Offensive", "Killing enemies charges the Resonance Disc. The disc launches itself toward a target for 300% base damage (+300% per stack), piercing all enemies it doesn't kill, and then explodes for 1000% base damage (+1000% per stack). Returns to the user, striking all enemies along the way for 300% base damage (+300% per stack)", "Legendary", "Linear"),
      new Item("Sentient Meat Hook", "Offensive", "20% (+20% per stack) chance on hit to fire homing hooks at up to 10 (+5 per stack) enemies for 100% TOTAL damage", "Legendary", "Hyperbolic Linear"),
      new Item("Shattering Justice", "Offensive", "After hitting an enemy 5 times, reduce their armor by 60 for 8 (+8 per stack) seconds", "Legendary", "Linear"),
      new Item("Soulbound Catalyst", "Utility", "Kills reduce equipment cooldown by 4s (+2s per stack)", "Legendary", "Linear"),
      new Item("Unstable Tesla Coil", "Offensive","Fire out lightning that hits 3 (+2 per stack) enemies for 200% base damage every 0.5s. The Tesla Coil switches off every 10 seconds", "Legendary", "Linear"),
      new Item("Wake of Vultures", "Utility", "Gain the power of any killed elite monster for 8s (+5s per stack)", "Legendary", "Linear"),
      new Item("Genesis Loop", "Offensive", "Falling below 25% health causes you to explode, dealing 6000% base damage. Recharges every 30 seconds (-50% per stack)", "Boss", "Linear"),
      new Item("Little Disciple", "Offensive", "Fire a tracking wisp for 300% (+300% per stack) damage. Fires every 1.6 seconds while sprinting. Fire rate increases with movement speed", "Boss", "Linear"),
      new Item("Queen's Gland", "Utility", "Every 30 seconds, summon a Beetle Guard with bonus 300% damage and 100% health. Can have up to 1 (+1 per stack) Guards at a time", "Boss", "Linear"),
      new Item("Titanic Knurl", "Healing", "Increase maximum health by 40 (+40 per stack) and base health regeneration by +1.6 hp/s (+1.6 hp/s per stack)", "Boss", "Linear")
    ];
    this.displayList = this.itemList.slice(0);
  }

  search(searchTerm: string): void {
    let matchingItems: Item[] = [];
    searchTerm = searchTerm.toLowerCase();
    for(let i = 0; i < this.itemList.length; i++) {
      let itemArray = [
        this.itemList[i].name.toLowerCase(),
        this.itemList[i].itemType.toLowerCase(),
        this.itemList[i].rarity.toLowerCase()
      ];
  
      for(let j = 0; j < itemArray.length; j++) {
        if(itemArray[j].indexOf(searchTerm) >= 0 && !matchingItems.includes(this.itemList[i])) {
          matchingItems.push(this.itemList[i]);
        }
      }
    }
    this.displayList = matchingItems;
  }
}