import { useState } from 'react';
import './Variant.scss';

type Props = {
	text: string;
	idx: number;
	selected: number | null;
	select: (i: number) => void;
	isAnswered: boolean;
	correct: number;
};
enum BackColors {
	BLUE = 'rgba(40, 105, 232, 0.4)',
	RED = 'rgba(236, 89, 116, 0.2)',
	GREEN = 'rgba(81, 179, 102, 0.2)',
	WHITE = '#F5F5F7',
}
enum BorderColors {
	BLUE = '#2869E8',
	RED = '#EC5974',
	GREEN = '#51B366',
	WHITE = '#D0D0D8',
}

function Variant({ text, idx, selected, select, isAnswered, correct }: Props) {
	const letters = ['A', 'B', 'C', 'D'];
	const [hover, setHover] = useState(false);

	const handleMouseEnter = () => {
		setHover(true);
	};
	const handleMouseOut = () => {
		setHover(false);
	};

	const backColor = () => {
		if (isAnswered) {
			if (selected === idx) {
				return selected === correct ? BackColors.GREEN : BackColors.RED;
			} else {
				return idx === correct ? BackColors.GREEN : BackColors.WHITE;
			}
		} else {
			return selected === idx ? BackColors.BLUE : BackColors.WHITE;
		}
	};
	const borderColor = () => {
		if (hover) {
			return BorderColors.BLUE;
		} else {
			if (isAnswered) {
				if (selected === idx) {
					return selected === correct ? BorderColors.GREEN : BorderColors.RED;
				} else {
					return idx === correct ? BorderColors.GREEN : BorderColors.WHITE;
				}
			} else {
				return selected === idx ? BorderColors.BLUE : BorderColors.WHITE;
			}
		}
	};

	return (
		<div className='variant'>
			<svg width='389' height='72' viewBox='0 0 420 72'>
				<path d='M404 36L421 36' stroke={borderColor()} />
				<path d='M0 36L17 36' stroke={borderColor()} />
				<path
					d='M39.8137 5.09773C41.9857 2.2033 45.3933 0.5 49.012 0.5H371.988C375.607 0.5 379.014 2.2033 381.186 5.09773L404.375 36L381.186 66.9023C379.014 69.7967 375.607 71.5 371.988 71.5H49.012C45.3933 71.5 41.9857 69.7967 39.8137 66.9023L16.6251 36L39.8137 5.09773Z'
					fill={backColor()}
					stroke={borderColor()}
				/>
			</svg>

			<p onMouseOver={handleMouseEnter} onMouseOut={handleMouseOut} onClick={() => select(idx)}>
				<span>{letters[idx]} </span>
				{text}
			</p>
		</div>
	);
}

export default Variant;
