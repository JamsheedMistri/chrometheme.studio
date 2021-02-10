import styles from '../styles/CategoryControl.module.css';
import { useState } from 'react';
import classnames from 'classnames';
import { SketchPicker } from 'react-color';
import Button from '@material-ui/core/Button';

export default function CategoryControl({ category }) {
	const [colorPickerVisible, setColorPickerVisible] = useState(false);
	const toggleColorPicker = () => setColorPickerVisible(!colorPickerVisible);

	return (
		<div className={styles.container}>
			<div className={styles.group}>
				<Button
					variant="contained"
					color="primary"
					onClick={toggleColorPicker}
					className={styles.button}
					disableElevation
				>
					{category.name}
				</Button>
				<Button
					variant="contained"
					onClick={toggleColorPicker}
					style={{ backgroundColor: category.color }}
					className={styles.colorPreview}
					disableElevation
				/>
			</div>
			{colorPickerVisible &&
				<div className={styles.popover}>
					<div className={styles.cover} onClick={toggleColorPicker} />
					<SketchPicker
						color={category.color}
						onChange={ color => category.update(color.hex) }
						disableAlpha={true}
					/>
				</div>
			}
		</div>
	);
}
