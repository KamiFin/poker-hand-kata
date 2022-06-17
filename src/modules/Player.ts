import { getCardNumberValue } from "../services/card";
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

    public getHighestCardValueInHand(): number {
        return Math.max(...this.hand.map((card) => getCardNumberValue(card.getSymbol())));
    }

    public getHighestCardInHand(): Card {
        const highestCard = Math.max(...this.hand.map((card) => getCardNumberValue(card.getSymbol())));
        return this.hand.find((card) => getCardNumberValue(card.getSymbol()) === highestCard);
    }

    public getFlush(): string {
        if(this.hand[0].getSuit() === this.hand[4].getSuit()) return this.hand[0].getSuit();
        return undefined;
    }
}
