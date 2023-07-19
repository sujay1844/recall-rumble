import { writable } from "svelte/store";
import type { CardInfo } from "./types";


export let cards = writable<CardInfo[]>([]);