import { type CardInfo, CardStatus } from "./types";

export default function generateCards(n: number): CardInfo[] {
  if (n % 2 !== 0) {
    throw new Error("Input must be an even number");
  }

  let cards: CardInfo[] = [];

  for (let i = 0; i < n/2; i++) {
	let card: CardInfo = { 
		id: i,
		content: getRandomEmoji(i),
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

function getRandomEmoji(i:number): string {
  const emojis = ['😀', '😃', '😄', '😊', '😎', '🤩', '😍', '😘', '😆', '😉'];
//   const randomIndex = Math.floor(Math.random() * emojis.length);
//   return emojis[randomIndex];
	return emojis[i];
}