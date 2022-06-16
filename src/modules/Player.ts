import { Card } from "./Card";

export class Player {
    private name: string;
    private hand: Card[] = [];

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public getHand(): Card[] {
        return this.hand;
    }

    public setHand(hand: Card[]): void {
        this.hand = hand;
    }

    public addCardToHand(card: Card) {
        this.hand.push(card);
    }
}
