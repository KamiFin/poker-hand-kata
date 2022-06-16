import { CardSymbol, cardValues } from "../constants/Card";

export function getCardNumberValue(cardSymbol: CardSymbol): number {
    return cardValues[cardSymbol];
}