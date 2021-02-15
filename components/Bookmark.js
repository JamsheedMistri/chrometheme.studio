import React from 'react';
import { getBookmarkTextColor } from '../utils/BrowserState';
import styles from '../styles/Bookmark.module.css';

const Bookmark = React.memo(({ favicon, title }) => {
	const bookmarkTextStyle = { color: getBookmarkTextColor() };

	return (
		<div className={styles.bookmark}>
			<img src={favicon} />
			<span className={styles.bookmarkName} style={bookmarkTextStyle}>{title}</span>
		</div>
	);
});

export default Bookmark;
