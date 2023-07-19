export enum CardStatus {
	Default,
	Selected,
	Solved,
}

export enum GameStatus {
	Playing,
	Won,
}

export interface CardInfo {
	id: number,
	content: string,
	status: CardStatus
}