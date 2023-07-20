import { type CardInfo, CardStatus } from "./types";

export default function generateCards(n: number): CardInfo[] {
  if (n % 2 !== 0) {
    throw new Error("Input must be an even number");
  }

  let cards: CardInfo[] = [];

  for (let i = 0; i < n/2; i++) {
	let card: CardInfo = { 
		id: i,
		emoji: getRandomEmoji(i),
		status: CardStatus.Default
	};
	cards.push(card);
	cards.push({...card, id: i+n/2});
  }

  // Shuffling the array
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  return cards;
}

function getRandomEmoji(i:number): number {
  const emojis = [
	127850,
	127875,
	127919,
	127925,
	127936,
	128096,
	128133,
	128142,
	128148,
	128175,
	128169,
	128190
]
	return emojis[i];
}