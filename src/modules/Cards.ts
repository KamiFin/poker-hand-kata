import { CardSuit, CardSymbol } from "../constants/Card";

export class Card {
    private suit: CardSuit;
    private symbol: CardSymbol;

    constructor(suit: CardSuit, symbol: CardSymbol) {
        this.suit = suit;
        this.symbol = symbol;
    }

    public getSuit(): CardSuit {
        return this.suit;
    }

    public getSymbol(): CardSymbol {
        return this.symbol;
    }
}
