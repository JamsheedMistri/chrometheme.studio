import styles from '../styles/MainContent.module.css';
import { useEffect, useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { SketchPicker } from 'react-color';
import classnames from 'classnames';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Switch from '@material-ui/core/Switch';

const theme = createMuiTheme({ palette: { type: 'dark' }});

export default function MainContent() {
	const {
		currentCategory,
		currentCategoryID,
		setCurrentCategoryID,
		colorCategories,
		incognito,
		setIncognito,
		inactive,
		setInactive,
		colors,
		resetToDefaults,
	} = useContext(GlobalContext);

	const [modalVisible, setModalVisible] = useState(false);

	const toggleInactive = event => {
		setInactive(event.target.checked);
	}

	const toggleIncognito = event => {
		setIncognito(event.target.checked);
	}

	const closeModal = () => {
		setModalVisible(false);
	}

	const renderCategory = type => {
		return colorCategories
			.filter(category => category.type == type)
			.map(category => {
				const buttonStyle =
					(category.id == currentCategoryID)
					? classnames(styles.button, styles.categoryButton, styles.active)
					: classnames(styles.button, styles.categoryButton);

				return (
					<div className={styles.buttonContainer}>
						<button
							key={category.id}
							onClick={() => { setCurrentCategoryID(category.id) }}
							className={buttonStyle}
						>
							{category.name}
						</button>
						<div
							className={styles.buttonColorPreview}
							style={{ background: category.color }}
						>&nbsp;</div>
					</div>
				)
			});
	}

	const downloadTheme = () => {
		setModalVisible(true);

		fetch('/api/generate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(colors),
		})
			.then(response => response.blob())
			.then(blob => {
				// Hacky method to download from API
				// Credit: https://medium.com/yellowcode/download-api-files-with-react-fetch-393e4dae0d9e
				const url = window.URL.createObjectURL(new Blob([blob]));
				const link = document.createElement('a');
				link.href = url;
				link.setAttribute('download', 'chrome-theme.zip');
				document.body.appendChild(link);
				link.click();
				link.parentNode.removeChild(link);
			})
	}

	/* Hacky workaround for react-color issue #760 */
	const [localColor, setLocalColor] = useState(currentCategory.color);
	const handleChange = color => {
		setLocalColor(color.hex);
	}

	// Update the color picker whenever the category is changed
	useEffect(() => {
		setLocalColor(currentCategory.color);
	}, [currentCategory]);

	// Update the actual color from GlobalState when our local variable is changed
	useEffect(() => {
		currentCategory.update(localColor);
	}, [localColor]);

	return (
		<div className={styles.container}>
			<div className={styles.headerContainer}>
				<div className={styles.titleContainer}>
					<h1 className={styles.siteTitle}>Chrome Theme Studio</h1>
					<h5 className={styles.subtitle}>chrometheme.studio</h5>
				</div>
				<div className={styles.currentEditing}>
					<h5 className={styles.preTitle}>Currently Editing</h5>
					<h1 className={styles.title}>{currentCategory.name} Color</h1>
				</div>
			</div>
			<div className={styles.mainContent}>
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

				<div className={styles.colorPicker}>
					<div className={styles.colorPickerPicker}>
						<SketchPicker
							color={localColor}
							onChange={handleChange}
							disableAlpha={true}
						/>
					</div>

					<div className={styles.clearBoth} />

					<br />

					<ThemeProvider theme={theme}>
						<label htmlFor="incognito">Incognito</label>
						<Switch checked={incognito} onChange={toggleIncognito} color="primary" />
						<br />
						<label htmlFor="inactive">Inactive</label>
						<Switch checked={inactive} onChange={toggleInactive} color="primary" />
					</ThemeProvider>
					<br />
					<button
						className={classnames(styles.button, styles.resetColorsButton)}
						onClick={resetToDefaults}
					>Reset Colors</button>
					<br />
					<button
						className={classnames(styles.button, styles.downloadButton)}
						onClick={downloadTheme}
					>Download Theme</button>
				</div>
			</div>
			{modalVisible && <div className={styles.modal}>
				<div className={styles.modalContainer}>
					<h1>Theme Installation Instructions</h1>
					<p>Follow these instructions in order to start using your new theme. If you're having trouble following these instructions, you can find a video tutorial here.</p>
					<ol>
						<li>
							<p>Click the download at the bottom of your screen to un-zip it.</p>
						</li>
						<li>
							<p>Open a new tab and go to URL <b>chrome://extensions</b> (or <b>edge://extensions</b> if you're on Edge).</p>
						</li>
						<li>
							<p>At the top right, slide the switch that says <b>Developer mode</b> to turn on Developer Mode.</p>
							<p>Don't worry, this is only a theme, not an extension, so it can't do anything to your browser. (feel free to inspect the contents of the extension or the source code of this website if you don't believe me)</p>
						</li>
						<li>
							<p>At the top left, click the <b>Load unpacked</b> button. Find the newly unzipped folder that you downloaded and select it.</p>
						</li>
						<li>
							<p>Voila! If you don't like the theme, you can click the <b>Undo</b> button and continue editing here until you like it.</p>
						</li>
					</ol>
					<p>If you liked this site, please share it with your friends! I spent a while working on it and would love to see more people use it :)</p>
					<button
						className={classnames(styles.button, styles.closeModal)}
						onClick={closeModal}
					>Close</button>
				</div>
			</div>}
		</div>
	);
}
