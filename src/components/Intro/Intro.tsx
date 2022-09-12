import './Intro.scss';
import hand from './../../assets/hand.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectGame, startGame } from '../../redux/gameSlice';

function Intro() {
	const { isFirstTime, sums, currentStep } = useAppSelector(selectGame);

	const dispatch = useAppDispatch();

	const handleStart = () => {
		dispatch(startGame());
	};

	return (
		<div className='intro'>
			<div className='intro__block'>
				<img src={hand} alt='hand' />
				<div className='intro__text'>
					{isFirstTime ? (
						<h3>Who wants to be a millionaire?</h3>
					) : (
						<>
							<p>Total score:</p>
							<h3>${sums[currentStep - 1] || 0}</h3>
						</>
					)}

					<div className='intro__btn' onClick={handleStart}>
						{isFirstTime ? 'Start' : 'Try Again'}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Intro;
