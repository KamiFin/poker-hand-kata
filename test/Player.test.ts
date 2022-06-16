import { expect } from "chai";
import { CardSuit, CardSymbol, cardValues } from "../src/constants/Card";
import { getWinner } from "../src/services/scoring";
import { Card } from "../src/modules/Card";
import { Player } from "../src/modules/Player";

describe('Player tests', function () {
    it('Create one player with one card in hand', function () {
        const player = new Player("Tom");
        expect(player.getHand()).to.not.be.undefined.and.not.null;
        expect(player.getHand().length).to.equal(0);

        const card = new Card(CardSuit.SPADE, "3");
        player.addCardToHand(card);
        
        expect(player.getHand().length).to.equal(1);
    });

    it('Get winner: 2 players 1 card each -> Tom wins high card', function () {
        const tom = new Player("Tom");
        const bob = new Player("Bob");

        const tomCard = new Card(CardSuit.SPADE, "3");
        tom.addCardToHand(tomCard);

        const bobCard = new Card(CardSuit.CLUBS, "T");
        bob.addCardToHand(bobCard);

        const winner = getWinner([tom, bob]);
        expect(winner.winners).to.equal("Bob");

        console.log(winner);
    });
});