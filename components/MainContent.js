import styles from '../styles/MainContent.module.css';
import { useEffect, useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import CategoryControl from './CategoryControl';
import Modal from './Modal';

export default function MainContent() {
	const {
		colorCategories,
		incognito,
		setIncognito,
		inactive,
		setInactive,
		colors,
		resetToDefaults,
	} = useContext(GlobalContext);

	// Modal state control
	const [welcomeModal, setWelcomeModalVisible] = useState(true);
	const closeWelcomeModal = () => setWelcomeModalVisible(false);

	const [downloadModal, setDownloadModalVisible] = useState(false);
	const closeDownloadModal = () => setDownloadModalVisible(false);

	// Toggling browser state
	const toggleInactive = event => setInactive(event.target.checked);
	const toggleIncognito = event => setIncognito(event.target.checked);

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
					<br />

					<Button
						variant="contained"
						color="secondary"
						onClick={resetToDefaults}
					>Reset Colors</Button>

					<br /> <br />

					<label htmlFor="incognito">Incognito</label>
					<Switch checked={incognito} onChange={toggleIncognito} color="primary" />

					<br />

					<label htmlFor="inactive">Inactive</label>
					<Switch checked={inactive} onChange={toggleInactive} color="primary" />
				</div>
			</div>

			<Modal open={welcomeModal} onClose={closeWelcomeModal}>
				<h1 className={styles.welcomeHeader}>Welcome to Chrome Theme Studio</h1>
				<div className={styles.welcomeContainer}>
					<article>
						<div className={styles.stepIcon}>1</div>
						Adjust different parts of the theme using the labeled buttons
					</article>
					<article>
						<div className={styles.stepIcon}>2</div>
						View different states of the browser by toggling <b>Inactive</b> and <b>Incognito</b> modes
					</article>
					<article className={styles.colSpan2}>
						<div className={styles.stepIcon}>3</div>
						Download your theme and use it on Google Chrome or Microsoft Edge for free
					</article>
				</div>
				<div className={styles.getStartedButton}>
					<Button
						variant="contained"
						color="primary"
						onClick={closeWelcomeModal}
					>Get Started</Button>
				</div>
			</Modal>

			<Modal open={downloadModal} onClose={closeDownloadModal}>
				<h1>Theme Installation Instructions</h1>
				<p>Follow these instructions in order to start using your new theme. If you're having trouble following these instructions, you can find a video tutorial here.</p>
				<ol>
					<li>
						<p>Click the file at the bottom of your screen to un-zip it.</p>
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
				<p>If you liked this site, please share it with your friends! I spent a while working on it and would love to see more people use it.</p>
				<Button
					variant="contained"
					color="secondary"
					onClick={closeDownloadModal}
				>Close</Button>
			</Modal>
		</div>
	);
}
