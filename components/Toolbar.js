import TabBar from './TabBar';
import ControlBar from './ControlBar';
import styles from '../styles/Toolbar.module.css';

export default function Toolbar() {
	return (
		<div className={styles.container}>
			<TabBar />
			<ControlBar />
		</div>
	);
}
