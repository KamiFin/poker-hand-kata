import { expect } from "chai";
import { CardSuit, CardSymbol, cardValues } from "../src/constants/Card";
import { getWinner } from "../src/services/scoring";
import { createHand } from "../src/services/card";
import { Card } from "../src/modules/Card";
import { Player } from "../src/modules/Player";

describe('Scoring tests', function () {
    it('Get winner: 2 players -> Tie', function () {
        const tom = new Player("Tom");
        const bob = new Player("Bob");

        const tomHand = createHand(["2H", "3D", "5S", "9C", "KD"]);
        tom.setHand(tomHand);

        const bobHand = createHand(["2H", "3D", "5S", "9C", "KD"]);
        bob.setHand(bobHand);

        const winner = getWinner([tom, bob]);
        expect(winner.winnersText).to.equal("|Tom||Bob|");
        expect(winner.reason).to.equal("Tie");

    });

    it('Get winner: 2 players -> Bob wins with highest card: K', function () {
        const tom = new Player("Tom");
        const bob = new Player("Bob");

        const tomHand = createHand(["2H", "3D", "5S", "9C", "TD"]);
        tom.setHand(tomHand);

        const bobHand = createHand(["2H", "3D", "5S", "9C", "KD"]);
        bob.setHand(bobHand);

        const winner = getWinner([tom, bob]);
        expect(winner.winnersText).to.equal("|Bob|");
        expect(winner.reason).to.equal("Highest card: K");

    });

    it('Get winner: 2 players -> Tom wins with flush: S', function () {
        const tom = new Player("Tom");
        const bob = new Player("Bob");

        const tomHand = createHand(["2S", "3S", "5S", "9S", "TS"]);
        tom.setHand(tomHand);

        const bobHand = createHand(["2H", "3D", "5S", "9C", "KD"]);
        bob.setHand(bobHand);

        const winner = getWinner([tom, bob]);
        expect(winner.winnersText).to.equal("|Tom|");
        expect(winner.reason).to.equal("Flush: S");

    });
});