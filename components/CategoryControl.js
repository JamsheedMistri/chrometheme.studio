import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import styles from '../styles/CategoryControl.module.css';

const CategoryControl = React.memo(({ category }) => {
	const [colorPickerVisible, setColorPickerVisible] = useState(false);
	const toggleColorPicker = () => setColorPickerVisible(!colorPickerVisible);

	return (
		<div className={styles.container}>
			<div className={styles.label}>{category.name.toUpperCase()}</div>
			<div className={styles.colorPreviewContainer}>
				<Button
					variant="contained"
					onClick={toggleColorPicker}
					style={{ backgroundColor: category.color }}
					className={styles.colorPreview}
					disableElevation
				/>
				{colorPickerVisible &&
					<div className={styles.popover}>
						<div className={styles.cover} onClick={toggleColorPicker} />
						<ChromePicker
							color={category.color}
							onChange={ color => category.update(color.hex) }
							disableAlpha={true}
						/>
					</div>
				}
			</div>
		</div>
	);
});

export default CategoryControl;
