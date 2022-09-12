import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { initData, selectGame } from '../redux/gameSlice';
import { Question } from '../redux/types';
import Game from './Game/Game';
import Intro from './Intro/Intro';

function App() {
	const { isGame } = useAppSelector(selectGame);

	const dispatch = useAppDispatch();
	async function fetchQuests() {
		const url = './questions.json';
		const quests = await fetch(url).then((res) => res.json() as Promise<Question[]>);
		dispatch(initData(quests));
	}

	useEffect(() => {
		fetchQuests();
	}, []);

	return <div className='app'>{isGame ? <Game /> : <Intro />}</div>;
}

export default App;
