interface NewCardPool {
  success: boolean,
  deck_id: string,
}

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
  console.log("newcardPool", newCardPool)
  return newCardPool ? newCardPool : null;
};

export const getNewCardHand = async () => {
  let newCardHand: object = {};
  try {
    const response = await fetch(
      'https://deckofcardsapi.com/api/deck/gf7tapc2oshz/draw/?count=5',
      { method: 'GET' }
    );
    const data: object = await response.json();
    newCardHand = data;
  }
  catch (error) {
    console.log('Request error: ', error);
  }
  console.log("newCardHand", newCardHand);
  return newCardHand ? newCardHand : null;
}