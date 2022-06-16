export enum CardSuit {
    CLUBS = "C",
    DIAMONDS = "D",
    HEARTS = "H",
    SPADE = "S",
}

export type CardSymbol = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "T" | "J" | "Q" | "K" | "A";

export type CardValueRecord = Record<CardSymbol, number>;

export const cardValues: CardValueRecord = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    T: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
}