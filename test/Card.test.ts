import { expect } from "chai";
import { CardSuit, CardSymbol, cardValues } from "../src/constants/Card";
import { getCardNumberValue, getCardSymbol } from "../src/services/card";
import { Card } from "../src/modules/Card";

describe('Card tests', function () {
    it('Create T of spades and test getCardSymbol and getCardNumberValue from services ', function () {
        const card = new Card(CardSuit.SPADE, "T");
        expect(card.getSuit()).to.equal("S");

        const cardNumberValue = getCardNumberValue(card.getSymbol());
        expect(cardNumberValue).to.equal(10);

        const cardSymbol = getCardSymbol(cardNumberValue);
        expect(cardSymbol).to.equal("T");

        
    });
});