import React from 'react'
import TabBar from './TabBar'
import ControlBar from './ControlBar'
import styles from '../styles/Toolbar.module.css'

const Toolbar = React.memo(() => (
	<div className={styles.container}>
		<TabBar />
		<ControlBar />
	</div>
))

export default Toolbar
