import React from 'react';
import { getToolbarColor } from '../utils/BrowserState';
import URLBar from '../components/URLBar';
import BookmarksBar from '../components/BookmarksBar';
import styles from '../styles/ControlBar.module.css';

const ControlBar = React.memo(() => {
	const controlBarStyle = { background: getToolbarColor() };

	return (
		<div className={styles.container} style={controlBarStyle}>
			<URLBar />
			<BookmarksBar />
		</div>
	);
});

export default ControlBar;
