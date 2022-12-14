import { useAppSelector } from '../../hooks/hooks';
import { selectGame } from '../../redux/gameSlice';

type Props = {
	sum: string;
	idx: number;
};

function Step({ sum, idx }: Props) {
	const { currentStep } = useAppSelector(selectGame);

	const cellColor = currentStep === idx ? '#2869E8' : '#D0D0D8';
	const textColor = currentStep === idx ? '#2869E8' : currentStep < idx ? '#D0D0D8' : '#000';

	return (
		<div className='step'>
			<svg width='376' height='40' viewBox='0 0 376 40'>
				<path d='M69 20H0' stroke={cellColor} />
				<path d='M376 20H307' stroke={cellColor} />
				<path
					d='M81.4526 4.63788C83.6376 2.01596 86.8742 0.5 90.2872 0.5H285.713C289.126 0.5 292.362 2.01597 294.547 4.63788L307.349 20L294.547 35.3621C292.362 37.984 289.126 39.5 285.713 39.5H90.2872C86.8742 39.5 83.6376 37.984 81.4526 35.3621L68.6509 20L81.4526 4.63788Z'
					fill='white'
					stroke={cellColor}
				/>
			</svg>

			<p style={{ color: textColor }}>${sum}</p>
		</div>
	);
}

export default Step;
