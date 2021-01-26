import styles from '../styles/MainContent.module.css';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { SketchPicker } from 'react-color';

export default function MainContent() {
	const { currentCategory, setCurrentCategory, colorCategories, incognito, setIncognito, inactive, setInactive } = useContext(GlobalContext);

	const handleChange = color => {
		currentCategory.update(color.hex);
	}

	const toggleInactive = event => {
		setInactive(event.target.checked);
	}
	
	const toggleIncognito = event => {
		setIncognito(event.target.checked);
	}

	return (
		<div className={styles.container}>
			<div className={styles.colorCategories}>
				{colorCategories.map((category) => {
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
			<div className={styles.settings}>
				<input type="checkbox" name="inactive" onChange={toggleInactive} />
				<label for="inactive"> Inactive</label>

				<input type="checkbox" name="incognito" onChange={toggleIncognito} />
				<label for="incognito"> Incognito</label>
				{inactive && <h1>inactive</h1>}
				{incognito && <h1>incognito</h1>}
			</div>
			<div className={styles.colorPicker}>
				<h1>{currentCategory.name}</h1>
				<SketchPicker
					color={currentCategory.color}
					onChangeComplete={handleChange}
					disableAlpha={true}
				/>
			</div>
		</div>
	);
}
