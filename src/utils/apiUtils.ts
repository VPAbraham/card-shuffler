export const getCardPool = async () => {
  const handOfCards: string[] = ["init"]
  const fetchCardPool = async () => {
    try {
      const response = await fetch(
        'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
        { method: 'GET' }
      );
      const json = await response.json();
      console.log(json);
    }
    catch (error) {
      console.log('Request error: ', error);
    }
  }
  fetchCardPool()
};