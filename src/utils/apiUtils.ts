export const getNewCardPool = async () => {
  let newCardPool: object = {};
  try {
    const response = await fetch(
      'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
      { method: 'GET' }
    );
    const data: object = await response.json();
    console.log(data);
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
    console.log(data);
    newCardHand = data;
  }
  catch (error) {
    console.log('Request error: ', error);
  }
  console.log("newCardHand", newCardHand);
  return newCardHand ? newCardHand : null;
}