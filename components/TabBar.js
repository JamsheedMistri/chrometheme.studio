import Tab from './Tab';
import styles from '../styles/TabBar.module.css';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export default function TabBar() {
	const { colors } = useContext(GlobalContext);

	return (
		<div className={styles.container} style={{ background: colors.frame }}>
			<Tab title="Google" favicon="https://www.google.com/favicon.ico" />
			<Tab active title="Jamsheed Mistri" favicon="https://jmistri.com/favicon.ico" />
			<Tab title="Hacker News" favicon="https://news.ycombinator.com/favicon.ico" />
		</div>
	);
}
