import styles from '../styles/Controls.module.css';
import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import CategoryControl from './CategoryControl';

export default function Controls() {
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
	);
}
