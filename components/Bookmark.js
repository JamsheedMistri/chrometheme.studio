import styles from '../styles/Bookmark.module.css';
import { getBookmarkTextColor } from '../utils/BrowserState';

export default function Bookmark({ favicon, title }) {
	const bookmarkTextStyle = { color: getBookmarkTextColor() };

	return (
		<div className={styles.bookmark}>
			<img src={favicon} />
			<span className={styles.bookmarkName} style={bookmarkTextStyle}>{title}</span>
		</div>
	);
}
