import styles from '../styles/Round.module.css';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export default function Round({ active, side }) {
	const { colors } = useContext(GlobalContext);
	const roundLeftStyle = { borderRightColor: active ? colors.toolbar : colors.backgroundTab };
	const roundRightStyle = { borderLeftColor: active ? colors.toolbar : colors.backgroundTab };

	return (
		<div className={styles.roundContainer}>
			{side == "left" && <div className={`${styles.round} ${styles.roundLeft}`} style={roundLeftStyle} /> }
			{side == "right" && <div className={`${styles.round} ${styles.roundRight}`} style={roundRightStyle} /> }
		</div>
	);
}
