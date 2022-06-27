import React from 'react'
import Bookmark from '../components/Bookmark'
import styles from '../styles/BookmarksBar.module.css'

const BookmarksBar = React.memo(() => (
	<div className={styles.container}>
		<Bookmark favicon="https://jmistri.com/favicon.ico" title="Bookmark 1" />
		<Bookmark favicon="https://www.chromium.org/_assets/customLogo.png" title="Bookmark 2" />
	</div>
))

export default BookmarksBar
