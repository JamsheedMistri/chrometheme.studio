import React from 'react';
import { getToolbarButtonIconColor, getOmniboxTextColor, getOmniboxBackgroundColor, isIncognito } from '../utils/BrowserState';
import styles from '../styles/URLBar.module.css';

const URLBar = React.memo(() => {
	const buttonsStyle = { fill: getToolbarButtonIconColor() };
	const urlBarStyle = {
		color: getOmniboxTextColor(),
		fill: getOmniboxTextColor(),
		background: getOmniboxBackgroundColor()
	};

	return (
		<div className={styles.container} style={buttonsStyle}>
			{/* Credit: https://www.materialui.co/icon/arrow-back */}
			<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 18 18" className={styles.topLevelControl}>
				<path d="M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z"/>
			</svg>
			{/* Credit: https://www.materialui.co/icon/arrow-forward */}
			<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 18 18" className={styles.topLevelControl}>
				<path d="M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z"/>
			</svg>
			{/* Credit: https://www.materialui.co/icon/refresh */}
			<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 18 18" className={styles.topLevelControl}>
				<path d="M9 13.5c-2.49 0-4.5-2.01-4.5-4.5S6.51 4.5 9 4.5c1.24 0 2.36.52 3.17 1.33L10 8h5V3l-1.76 1.76C12.15 3.68 10.66 3 9 3 5.69 3 3.01 5.69 3.01 9S5.69 15 9 15c2.97 0 5.43-2.16 5.9-5h-1.52c-.46 2-2.24 3.5-4.38 3.5z"/>
			</svg>

			<div className={styles.url} style={urlBarStyle}>
				{/* Credit: https://www.materialui.co/icon/https */}
				<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
					<path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
				</svg>
				jmistri.com
			</div>

			{/* Credit: https://worldvectorlogo.com/downloaded/incognito-1 */}
			{/* Credit: https://www.materialui.co/icon/account-circle */}
			{isIncognito() ? (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.6 -0.6 241.2 241.2" width="24" height="24" className={styles.topLevelControl}>
					<path d="M121 0C53.9-.6-.6 53.9 0 121c.6 65.2 53.8 118.4 119 119 67.1.6 121.6-53.9 121-121C239.4 53.8 186.2.6 121 0zM90.5 59c.3-.9 1-1.5 2.2-1.2 2.2.5 19.9 4.3 19.9 4.3s36.8-5.6 38.1-5.9c1.1-.2 1.9.4 2.1 1.4.1.4 6.3 21.3 11.7 39.5H78.3C83.9 79.6 90.1 60 90.5 59zm85.9 103.3c-.8 12.2-10.7 22.1-22.9 22.9-14.3.9-26.1-10.4-26.1-24.5 0-.7 0-1.4.1-2.1-2-.7-4.2-1-6.4-1-2.3 0-4.5.4-6.7 1.1.1.7.1 1.3.1 2 0 14.1-11.8 25.4-26.1 24.5-12.2-.8-22.1-10.7-22.9-22.9-.8-14.2 10.5-26.1 24.5-26.1 10.2 0 19 6.3 22.7 15.2 2.7-.8 5.5-1.3 8.4-1.3 2.8 0 5.5.4 8.1 1.2 3.7-8.9 12.4-15.1 22.7-15.1 14.1 0 25.4 11.9 24.5 26.1zm23.4-34.3H42.4c-.2 0-.3-.3-.1-.4 5.2-2.7 35.4-17.6 79-17.6 43.7 0 73.5 14.8 78.6 17.6.2.1.1.4-.1.4z"/>
					<circle cx="151.9" cy="160.8" r="17.4"/>
					<circle cx="90.1" cy="160.8" r="17.4"/>
				</svg>
			) : (
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18" className={styles.topLevelControl}>
					<path d="M9 1C4.58 1 1 4.58 1 9s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 2.75c1.24 0 2.25 1.01 2.25 2.25S10.24 8.25 9 8.25 6.75 7.24 6.75 6 7.76 3.75 9 3.75zM9 14.5c-1.86 0-3.49-.92-4.49-2.33C4.62 10.72 7.53 10 9 10c1.47 0 4.38.72 4.49 2.17-1 1.41-2.63 2.33-4.49 2.33z"/>
				</svg>
			)}


			{/* Credit: https://www.materialui.co/icon/more-vert */}
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18" className={styles.topLevelControl}>
				<path d="M9 5.5c.83 0 1.5-.67 1.5-1.5S9.83 2.5 9 2.5 7.5 3.17 7.5 4 8.17 5.5 9 5.5zm0 2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S9.83 7.5 9 7.5zm0 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
			</svg>
		</div>
	);
});

export default URLBar;
