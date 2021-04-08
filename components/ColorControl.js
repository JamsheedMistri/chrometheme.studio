import React, { useState, useContext } from 'react'
import Button from '@material-ui/core/Button'
import { ChromePicker } from 'react-color'
import styles from '../styles/ColorControl.module.css'
import { GlobalContext } from '../context/GlobalContext'

const ColorControl = React.memo(({ id, color, data }) => {
	const [colorPickerVisible, setColorPickerVisible] = useState(false)
	const toggleColorPicker = () => setColorPickerVisible(!colorPickerVisible)
	const { updateColor } = useContext(GlobalContext)

	return (
		<div className={styles.container}>
			<div className={styles.label}>{data.name.toUpperCase()}</div>
			<div className={styles.colorPreviewContainer}>
				<Button
					variant="contained"
					onClick={toggleColorPicker}
					style={{ backgroundColor: color }}
					className={styles.colorPreview}
					disableElevation
				/>
				{colorPickerVisible && (
					<div className={styles.popover}>
						<div className={styles.cover} onClick={toggleColorPicker} />
						<ChromePicker
							color={color}
							onChange={(color) => updateColor(id, color.hex)}
							disableAlpha={true}
						/>
					</div>
				)}
			</div>
		</div>
	)
})

export default ColorControl
