import Modal from '../Modal';
import Button from '@material-ui/core/Button';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

export default function DownloadModal() {
	const { downloadModal, setDownloadModalVisible } = useContext(GlobalContext);
	const closeDownloadModal = () => setDownloadModalVisible(false);

	return (
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
	);
}
