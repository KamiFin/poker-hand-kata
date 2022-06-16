import { CardSymbol, cardValues, CardValueRecord } from "../constants/Card";


export function getCardNumberValue(cardSymbol: CardSymbol): number {
    return cardValues[cardSymbol];
}

export function getCardSymbol(value: number): string {
    const keys =  Object.keys(cardValues);
    return keys.find((key) => value === cardValues[key]);
}