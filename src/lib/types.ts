export enum CardStatus {
	Default,
	Selected,
	Solved,
}

export enum GameStatus {
	Default,
	Playing,
	Won,
}

export interface CardInfo {
	id: number,
	emoji: number,
	status: CardStatus
}