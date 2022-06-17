import { Card } from "../modules/Card";
import { Player } from "../modules/Player";
import { getCardNumberValue, getCardSymbol } from "./card";

interface IFinalScore {
    winnersText: string,
    reason: string,
}

export function getWinner(players: Player[]): IFinalScore {
    let winnersText: string[] = [];
    const winners = calculateWinners(players);
    
    if (winners.players && winners.players.length > 0) {
        winnersText = winners.players.map((player) => "|".concat(player.getName()).concat("|"));
        if(winners.players.length > 1) {
            winners.reason = "Tie";
        }
    }
    return {winnersText: winnersText.join(""), reason: winners.reason};
} 

interface IPlayersWinner {
    players: Player[],
    reason: string,
}

function calculateWinners(players: Player[]): IPlayersWinner {
    let winners: IPlayersWinner;
    winners = getFlushWinners(players);
    if(winners.players && winners.players.length === 1) return winners;
    winners = getHighestCardWinners(players); 
    return winners;
}


function getHighestCardWinners(players: Player[]): IPlayersWinner {
    const highestCard =  Math.max(...players.map((player) => player.getHighestCardValueInHand()));
    return {players: players.filter((player) => highestCard === player.getHighestCardValueInHand()), reason: "Highest card: ".concat(getCardSymbol(highestCard))};
}

function getFlushWinners(players: Player[]): IPlayersWinner {
    let winners = players.filter((player) => player.getFlush());
    let reason = "";
    if(winners && winners.length > 0) {
        reason = "Flush: ".concat(winners[0].getFlush());
    }
    return {players: winners, reason};
}