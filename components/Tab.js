import React from 'react'
import {
	getBackgroundTabColor,
	getToolbarColor,
	getTabTextColor,
	getTabBackgroundTextColor,
} from '../utils/BrowserState'
import Round from './Round'
import styles from '../styles/Tab.module.css'

const Tab = React.memo(({ active, position, title, favicon }) => {
	const tabStyle = {
		background: active ? getToolbarColor() : getBackgroundTabColor(),
		color: active ? getTabTextColor() : getTabBackgroundTextColor(),
		fill: active ? getTabTextColor() : getTabBackgroundTextColor(),
	}

	return (
		<div className={styles.tab}>
			{active && <Round active side="left" />}
			{position == 'first' && <Round side="left" />}
			<div className={styles.tabContainer} style={tabStyle}>
				<img src={favicon} />
				<span className={styles.tabTitle}>{title}</span>
				{/* Credit: https://www.materialui.co/icon/close */}
				<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 18 18">
					<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
				</svg>
			</div>
			{position == 'last' && <Round side="right" />}
			{active && <Round active side="right" />}
		</div>
	)
})

export default Tab
