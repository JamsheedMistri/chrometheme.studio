import styles from '../styles/BookmarksBar.module.css';
import Bookmark from '../components/Bookmark';

export default function BookmarksBar() {
	return (
		<div className={styles.container}>
			<Bookmark favicon="https://jmistri.com/favicon.ico" title="Bookmark 1" />
			<Bookmark favicon="https://google.com/favicon.ico" title="Bookmark 2" />
		</div>
	);
}
