import Toolbar from './Toolbar';
import PagePreview from './PagePreview';
import styles from '../styles/BrowserPreview.module.css';

export default function BrowserPreview() {
	return (
		<div className={styles.container}>
			<Toolbar />
			<iframe className={styles.pagePreview} src="https://jmistri.com" />
		</div>
	);
}
