import styles from '../styles/MainContent.module.css';
import { useContext } from 'react';
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
		colors
	} = useContext(GlobalContext);

	const handleChange = color => {
		currentCategory.update(color.hex);
	}

	const toggleInactive = event => {
		setInactive(event.target.checked);
	}

	const toggleIncognito = event => {
		setIncognito(event.target.checked);
	}

	const renderCategory = type => {
		return colorCategories
			.filter(category => category.type == type)
			.map(category => {
				const buttonStyle =
					(category.id == currentCategoryID)
					? classnames(styles.categoryButton, styles.active)
					: styles.categoryButton;

				return (
					<div className={styles.buttonContainer}>
						<button
							onClick={() => { setCurrentCategoryID(category.id) }}
							className={buttonStyle}
							key={category.id}
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

	return (
		<div className={styles.container}>
			<div className={styles.headerContainer}>
				<div>
					<h1 className={styles.siteTitle}>Chrome Theme Generator</h1>
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
							color={currentCategory.color}
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
				</div>
			</div>
			<button
				onClick={downloadTheme}
			>Download</button>
		</div>
	);
}
