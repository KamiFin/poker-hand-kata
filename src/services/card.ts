import { CardSymbol, CardSuit, cardValues, CardValueRecord } from "../constants/Card";
import { Card } from "../modules/Card";


export function getCardNumberValue(cardSymbol: CardSymbol): number {
    return cardValues[cardSymbol];
}

export function getCardSymbol(value: number): string {
    const keys =  Object.keys(cardValues);
    return keys.find((key) => value === cardValues[key]);
}

export function formatCard(cardText: string): Card {
    if(cardText.length === 0 || cardText.length > 2) return null;
    const symbol= cardText.charAt(0);
    const suit = cardText.charAt(1);

    return new Card(suit as CardSuit, symbol as CardSymbol);
}

export function createHand(cardsText: string[]): Card[] {
    return cardsText.map((cardText) => formatCard(cardText));
}