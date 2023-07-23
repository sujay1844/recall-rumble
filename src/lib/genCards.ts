import { type CardInfo, CardStatus } from "./types";

export default function generateCards(n: number): CardInfo[] {

	if (n % 2 !== 0) throw new Error("Input must be an even number");

	let cards: CardInfo[] = [];

	for (let i = 0; i < n / 2; i++) {
		let card: CardInfo = {
			id: i,
			emoji: RandomEmojiGenerator.getRandomEmoji(),
			status: CardStatus.Default
		};
		cards.push(card);
		cards.push({ ...card, id: i + n / 2 });
	}

	// Shuffling the array
	for (let i = cards.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[cards[i], cards[j]] = [cards[j], cards[i]];
	}

	return cards;
}

class RandomEmojiGenerator {
	private static memo = new Set<number>();

	static getRandomEmoji(): number {

		// Check if all emojis have been generated. If all emojis have been generated, clear the set
		if (this.memo.size === 80) this.memo.clear();

		// Emoji unicode range
		const min = 128512;
		const max = 128591;

		const emoji = Math.floor(Math.random() * (max - min + 1)) + min;

		if (this.memo.has(emoji)) {
			// If the emoji has already been generated, generate another one
			return this.getRandomEmoji();

		} else {
			// If the emoji has not been generated, add it to the set and return it
			this.memo.add(emoji);
			return emoji;
		}

	}
}