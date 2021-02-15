import React from 'react';
import Toolbar from './Toolbar';
import styles from '../styles/BrowserPreview.module.css';

const BrowserPreview = React.memo(() => (
	<div className={styles.container}>
		<Toolbar />
		<iframe className={styles.pagePreview} src="https://jmistri.com" />
	</div>
));

export default BrowserPreview;
