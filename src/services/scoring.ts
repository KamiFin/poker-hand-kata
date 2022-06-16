import { Card } from "../modules/Card";
import { Player } from "../modules/Player";
import { getCardNumberValue } from "./card";

export interface IPlayerWinner {
    winners: string,
    reason: string,
}

export function getWinner(players: Player[]): IPlayerWinner {

    const winners = getHighestCardWinner(players);
    return {winners: winners[0].getName(), reason: "Highest card"};
} 

export interface IHighestCardWinner {
    name: string,
    reason: string,
}

function getHighestCardWinner(players: Player[]): Player[] {
    const highestCard =  Math.max(...players.map((player) => getHighestCardValueInHand(player.getHand())));
    return players.filter((player) => highestCard === getHighestCardValueInHand(player.getHand()));
}

function getHighestCardValueInHand(hand: Card[]): number {
    return Math.max(...hand.map((card) => getCardNumberValue(card.getSymbol())));
}

function getHighestCardInHand(hand: Card[]): Card {
    const highestCard = Math.max(...hand.map((card) => getCardNumberValue(card.getSymbol())));
    return hand.find((card) => getCardNumberValue(card.getSymbol()) === highestCard);
}

function haveHighestCard() {

}