import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Question } from './types';
import { sums } from './sums';

interface GameState {
	isGame: boolean;
	isFirstTime: boolean;
	currentStep: number;
	questData: Question[];
	gameQuestions: Question[];
	sums: string[];
}

const initialState: GameState = {
	isGame: false,
	isFirstTime: true,
	currentStep: 0,
	gameQuestions: [],
	questData: [],
	sums,
};

const setGameQuestions = (data: Question[]): Question[] => {
	const quests: Question[] = [];
	while (quests.length < 12) {
		const rand = Math.floor(Math.random() * data.length);
		const el = data[rand];
		if (quests.includes(el)) continue;
		quests.push(el);
	}
	return quests;
};

const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		initData: (state, action) => {
			state.questData = action.payload;
		},
		startGame: (state) => {
			state.gameQuestions = setGameQuestions(state.questData);
			state.currentStep = 0;
			state.isGame = true;
			state.isFirstTime = false;
		},
		nextQuestion: (state) => {
			state.currentStep = ++state.currentStep;
			if (state.currentStep === 12) {
				state.isGame = false;
			}
		},
		endGame: (state) => {
			state.isGame = false;
		},
	},
});

export const { startGame, endGame, nextQuestion, initData } = gameSlice.actions;

export const selectGame = (state: RootState) => state.game;

export default gameSlice.reducer;
