import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import CategoryControl from './CategoryControl';
import styles from '../styles/Controls.module.css';

const Controls = React.memo(() => {
	const { colorCategories, colors } = useContext(GlobalContext);

	const renderCategory = type => {
		return colorCategories
			.filter(category => category.type == type)
			.map(category => (
				<CategoryControl
					key={category.id}
					category={category}
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
					{renderCategory("inactive_incognito")}
				</div>
			</div>
		</div>
	);
});

export default Controls;
