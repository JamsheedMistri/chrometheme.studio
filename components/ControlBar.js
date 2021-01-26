import styles from '../styles/ControlBar.module.css';
import URLBar from '../components/URLBar';
import BookmarksBar from '../components/BookmarksBar';
import { getToolbarColor } from '../utils/BrowserState';

export default function ControlBar() {
	const controlBarStyle = { background: getToolbarColor() };

	return (
		<div className={styles.container} style={controlBarStyle}>
			<URLBar />
			<BookmarksBar />
		</div>
	);
}
