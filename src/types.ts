export type Card = {
  code: string,
  image: string,
  images: string[],
  suit: string,
  value: string
}

export type Hand = Card[];