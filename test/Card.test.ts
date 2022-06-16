import { expect } from "chai";
import { CardSuit, CardSymbol, cardValues } from "../src/constants/Card";
import { getCardNumberValue } from "../src/utils/card";
import { Card } from "../src/modules/Cards";

describe('Card tests', function () {
    it('Get value of 3 of spades', function () {
        const card = new Card(CardSuit.SPADE, "3");
        expect(card.getSuit()).to.equal("S");

        const cardNumberValue = getCardNumberValue(card.getSymbol());
        expect(cardNumberValue).to.equal(3);
    });
});