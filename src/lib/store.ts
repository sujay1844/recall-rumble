import { writable } from "svelte/store";
import { type CardInfo, GameStatus } from "./types";


export let cards = writable<CardInfo[]>([]);
export let gameStatus = writable<GameStatus>(GameStatus.Default);