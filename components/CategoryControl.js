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
				<div className={styles.label}>{category.name.toUpperCase()}</div>
				<div>
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
						<SketchPicker
							color={category.color}
							onChange={ color => category.update(color.hex) }
							disableAlpha={true}
						/>
					</div>
					}
				</div>
			</div>
		</div>
	);
}
