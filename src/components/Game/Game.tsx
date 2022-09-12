import { useState } from 'react';
import './Game.scss';
import Variant from '../Variant/Variant';
import Score from '../Score/Score';
import burger from './../../assets/burger.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { endGame, selectGame, nextQuestion } from '../../redux/gameSlice';

function Game() {
	const [isScore, setScore] = useState(false);
	const [isAnswered, setAnswered] = useState(false);
	const [selected, setSelected] = useState<number | null>(null);

	const { currentStep, gameQuestions } = useAppSelector(selectGame);
	const { question, content, correct } = gameQuestions[currentStep];

	const dispatch = useAppDispatch();

	const handleAnswer = () => {
		setAnswered(true);
	};
	const handleNext = () => {
		if (isAnswered && selected !== correct) {
			dispatch(endGame());
			return;
		}
		dispatch(nextQuestion());
		setAnswered(false);
		setSelected(null);
	};

	const handleSelect = (i: number) => {
		if (!isAnswered) {
			setSelected(i);
		}
	};

	return (
		<div className='game'>
			<div className={`game__block  ${isScore ? ' blur' : ''}`}>
				<img src={burger} alt='burger' onClick={() => setScore(true)} />

				<p>{question}</p>
				<div className='game__answers'>
					{content.map((text: string, i: number) => (
						<Variant
							text={text}
							key={i}
							idx={i}
							selected={selected}
							select={handleSelect}
							isAnswered={isAnswered}
							correct={correct}
						/>
					))}
				</div>

				{isAnswered ? (
					<button onClick={handleNext}>NEXT </button>
				) : (
					<button disabled={typeof selected !== 'number'} onClick={handleAnswer}>
						OK
					</button>
				)}
			</div>

			<Score isShow={isScore} close={() => setScore(false)} />
		</div>
	);
}

export default Game;
