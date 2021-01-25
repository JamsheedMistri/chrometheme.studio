import styles from '../styles/MainContent.module.css';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { SketchPicker } from 'react-color';

export default function MainContent() {
	const { currentCategory, setCurrentCategory, categories } = useContext(GlobalContext);
	const { name, color, update } = currentCategory;

	const handleChange = color => {
		update(color.hex);
	}

	return (
		<div className={styles.container}>
			<div className={styles.colorCategories}>
				{categories.map((category) => {
					return (
						<button
							onClick={() => { setCurrentCategory(category) }}
							className={styles.categoryButton}
							style={{ background: category.color }}
						>
							{category.name}
						</button>
					);
				})}
			</div>
			<div className={styles.colorPicker}>
				<h1>{currentCategory.name}</h1>
				<SketchPicker
					color={color}
					onChangeComplete={handleChange}
					disableAlpha={true}
				/>
			</div>
		</div>
	);
}
