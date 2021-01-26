import styles from '../styles/Round.module.css';
import { getBackgroundTabColor, getToolbarColor } from '../utils/BrowserState';

export default function Round({ active, side }) {
	const roundColor = active ? getToolbarColor() : getBackgroundTabColor();
	const roundLeftStyle = { borderRightColor: roundColor };
	const roundRightStyle = { borderLeftColor: roundColor };

	return (
		<div className={styles.roundContainer}>
			{side == "left" && <div className={`${styles.round} ${styles.roundLeft}`} style={roundLeftStyle} /> }
			{side == "right" && <div className={`${styles.round} ${styles.roundRight}`} style={roundRightStyle} /> }
		</div>
	);
}
