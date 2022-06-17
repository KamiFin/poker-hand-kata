import { expect } from "chai";
import { CardSuit, CardSymbol, cardValues } from "../src/constants/Card";
import { getWinner } from "../src/services/scoring";
import { createHand } from "../src/services/card";
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

    it('Create one player with five card in hand', function () {
        const tom = new Player("Tom");

        const tomHand = createHand(["2H", "3D", "5S", "9C", "KD"]);
        tom.setHand(tomHand);
        expect(tomHand.length).to.equal(5);
    });
});