import styles from '../styles/ControlBar.module.css';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export default function ControlBar() {
	const { colors } = useContext(GlobalContext);
	const controlBarStyle = { background: colors.toolbar };

	return (
		<div className={styles.container} style={controlBarStyle}>
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
			
			<div className={styles.urlBar}>
				{/* Credit: https://www.materialui.co/icon/https */}
				<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
					<path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
				</svg>
				jmistri.com
			</div>

			{/* Credit: https://www.materialui.co/icon/account-circle */}
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18" className={styles.topLevelControl}>
				<path d="M9 1C4.58 1 1 4.58 1 9s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 2.75c1.24 0 2.25 1.01 2.25 2.25S10.24 8.25 9 8.25 6.75 7.24 6.75 6 7.76 3.75 9 3.75zM9 14.5c-1.86 0-3.49-.92-4.49-2.33C4.62 10.72 7.53 10 9 10c1.47 0 4.38.72 4.49 2.17-1 1.41-2.63 2.33-4.49 2.33z"/>
			</svg>

			{/* Credit: https://www.materialui.co/icon/more-vert */}
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18" className={styles.topLevelControl}>
				<path d="M9 5.5c.83 0 1.5-.67 1.5-1.5S9.83 2.5 9 2.5 7.5 3.17 7.5 4 8.17 5.5 9 5.5zm0 2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S9.83 7.5 9 7.5zm0 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
			</svg>
		</div>
	);
}
