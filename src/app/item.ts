export class Item {
    name: string;
    itemType: string;
    itemDescription: string;
    rarity: string;
    stackType: string;

    constructor(name: string, itemType: string, itemDescription: string, rarity: string, stackType: string) {
        this.name = name;
        this.itemType = itemType;
        this.itemDescription = itemDescription;
        this.rarity = rarity;
        this.stackType = stackType;
    }
}