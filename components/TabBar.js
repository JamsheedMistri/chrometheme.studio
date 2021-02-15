import React from 'react';
import { getFrameColor, getBackgroundTabColor, getTabBackgroundTextColor } from '../utils/BrowserState';
import Tab from './Tab';
import styles from '../styles/TabBar.module.css';

const TabBar = React.memo(() => {
	const frameStyle = { background: getFrameColor() };
	const dividerStyle = { borderColor: getTabBackgroundTextColor() };
	const newTabButtonStyle = { background: getBackgroundTabColor(), fill: getTabBackgroundTextColor() };
	const shouldShowDivider = getFrameColor() == getBackgroundTabColor();

	return (
		<div className={styles.container} style={frameStyle}>
			<Tab position="first" title="Chromium" favicon="https://www.chromium.org/_/rsrc/1438879449147/config/customLogo.gif" />
			<Tab active title="Jamsheed Mistri" favicon="https://jmistri.com/favicon.ico" />
			<Tab position="last" title="Hacker News" favicon="https://news.ycombinator.com/favicon.ico" />
			{ shouldShowDivider && <div className={styles.newTabDivider} /> }
			<div className={styles.newTabButtonContainer} style={dividerStyle}>
				<div className={styles.newTabButton} style={newTabButtonStyle}>
					{/* Credit: https://www.materialui.co/icon/add */}
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
						<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
					</svg>
				</div>
			</div>
		</div>
	);
});

export default TabBar;
