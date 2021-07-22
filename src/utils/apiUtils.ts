type NewCardPool = {
  success: boolean,
  deck_id: string,
}
type NewCardHand = {
  cards: Card[],
}

export type Card = {
  code: string,
  image: string,
  images: string[],
  suit: string,
  value: string
}

export type Hand = Card[];

export const getNewCardPool = async () => {
  let newCardPool: NewCardPool = {
    success: false,
    deck_id: ""
  };
  try {
    const response = await fetch(
      'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
      { method: 'GET' }
    );
    const data = await response.json();
    newCardPool = data;
  }
  catch (error) {
    console.log('Request error: ', error);
  }
  return newCardPool ? newCardPool.deck_id : null;
};


export const getNewCardHand = async (deckId: string) => {
  let newCardHand: NewCardHand = { cards: [] };
  try {
    const response = await fetch(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`,
      { method: 'GET' }
    );
    const data: NewCardHand = await response.json();
    newCardHand = data;
  }
  catch (error) {
    console.log('Request error: ', error);
  }
  const extractedCards: Hand = newCardHand.cards
  return newCardHand && extractedCards;
}