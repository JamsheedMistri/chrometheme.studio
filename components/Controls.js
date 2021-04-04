import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import ColorControl from './ColorControl';
import styles from '../styles/Controls.module.css';

const Controls = React.memo(() => {
	const { colors, colorData } = useContext(GlobalContext);
	const orderedColorKeys = [ 'frame', 'frame_inactive', 'frame_incognito', 'frame_incognito_inactive', 'background_tab', 'background_tab_inactive', 'background_tab_incognito', 'background_tab_incognito_inactive', 'tab_background_text', 'tab_background_text_inactive', 'tab_background_text_incognito', 'tab_background_text_incognito_inactive', 'toolbar', 'toolbar_button_icon', 'omnibox_text', 'omnibox_background', 'tab_text', 'bookmark_text' ];

	const renderCategory = type => {
		return orderedColorKeys
			.filter(color => colorData[color].type == type)
			.map(color => (
				<ColorControl
					key={color}
					id={color}
					color={colors[color]}
					data={colorData[color]}
				/>
			));
	}

	return (
		<div className={styles.container}>
			<p className={styles.instructions}>Click the colored box in each row to adjust the browser theme in real-time. Once you're done, click the "Download Theme" button above.</p>
			<div className={styles.colorCategories}>
				<div className={styles.colorCategory}>
					<h2>Universal</h2>
					{renderCategory("universal")}
				</div>
				<div className={styles.colorCategory}>
					<h2>Active</h2>
					{renderCategory("active")}

					<h2>Inactive</h2>
					{renderCategory("inactive")}
				</div>
				<div className={styles.colorCategory}>
					<h2>Incognito</h2>
					{renderCategory("incognito")}

					<h2>Inactive & Incognito</h2>
					{renderCategory("incognito_inactive")}
				</div>
			</div>
		</div>
	);
});

export default Controls;
