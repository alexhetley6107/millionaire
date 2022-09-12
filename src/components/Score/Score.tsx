import './Score.scss';
import Step from './Step';
import closing from './../../assets/close.svg';
import { useAppSelector } from '../../hooks/hooks';
import { selectGame } from '../../redux/gameSlice';

type Props = {
	isShow: boolean;
	close: () => void;
};

function Score({ isShow, close }: Props) {
	const { sums } = useAppSelector(selectGame);

	return (
		<div className={isShow ? 'show score' : 'score'}>
			<img src={closing} alt='close' onClick={close} />
			<div className='score__steps'>
				{sums.map((el, i) => (
					<Step sum={el} key={i} idx={i} />
				))}
			</div>
		</div>
	);
}

export default Score;
