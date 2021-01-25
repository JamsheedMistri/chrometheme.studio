import styles from '../styles/Tab.module.css';
import Round from './Round';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export default function Tab({ active, title, favicon }) {
	const { colors } = useContext(GlobalContext);
	const tabContainerStyle = { background: active ? colors.toolbar : colors.backgroundTab };

	return (
		<div className={styles.tab}>
			<span className={styles.roundFarLeft}>
				{ !active && <Round active={false} side="left" /> }
			</span>

			{ active && <Round active={true} side="left" /> }
			<div className={styles.tabContainer} style={tabContainerStyle}>
				<img src={favicon} />
				<span className={styles.tabTitle}>{title}</span>
				{/* Credit: https://www.materialui.co/icon/close */}
				<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 18 18">
					<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
				</svg>
			</div>
			{ active && <Round active={true} side="right" /> }

			<span className={styles.roundFarRight}>
				{ !active && <Round active={false} side="right" /> }
			</span>
		</div>
	);
}
