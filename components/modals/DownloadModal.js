import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Button from '@material-ui/core/Button'
import Modal from '../Modal'
import styles from '../../styles/modals/DownloadModal.module.css'

const DownloadModal = React.memo(() => {
	const { modals, updateModal, shareResponse } = useContext(GlobalContext)
	const closeDownloadModal = () => updateModal('download', false)
	const showShareModal = () => {
		updateModal('download', false)
		updateModal('share', true)
	}

	let shouldShowShareButton = shareResponse !== null && 'id' in shareResponse

	return (
		<Modal open={modals.download} onClose={closeDownloadModal}>
			<h1>Theme Installation Instructions</h1>
			<p>
				Follow these instructions in order to start using your new theme. If you are having trouble
				following the instructions, you can also view the tutorial video by{' '}
				<a
					href="https://www.youtube.com/watch?v=9MnJO3xX1jI"
					className={styles.link}
					target="_blank"
				>
					clicking here
				</a>
				.
			</p>
			<ol>
				<li>
					<p>Click the file at the bottom of your screen to un-zip it.</p>
				</li>
				<li>
					<p>
						Open a new tab and go to URL <span className={styles.link}>chrome://extensions</span>{' '}
						(if you're on Google Chrome), <span className={styles.link}>edge://extensions</span> (if
						you're on Microsoft Edge), or <span className={styles.link}>brave://extensions</span> if
						you're on Brave.
					</p>
				</li>
				<li>
					<p>
						At the top right, slide the switch that says <b>Developer mode</b> to turn on Developer
						Mode.
					</p>
					<p>
						Don't worry, this is only a theme, not an extension, so it can't do anything to your
						browser. (feel free to inspect the contents of the extension or the{' '}
						<a
							href="https://github.com/JamsheedMistri/chrometheme.studio"
							className={styles.link}
							target="_blank"
						>
							source code
						</a>{' '}
						of this website if you don't believe me)
					</p>
				</li>
				<li>
					<p>
						At the top left, click the <b>Load unpacked</b> button. Find the newly unzipped folder
						that you downloaded and select it.
					</p>
				</li>
			</ol>
			<p>
				If you liked this site, please share it with your friends! I spent a while working on it and
				would love to see more people use it.
			</p>
			<Button
				variant="contained"
				color="secondary"
				onClick={closeDownloadModal}
				className={styles.closeButton}
			>
				Close
			</Button>
			<Button
				variant="contained"
				color="primary"
				onClick={showShareModal}
				disabled={!shouldShowShareButton}
			>
				{shouldShowShareButton ? 'Share Theme' : 'Loading...'}
			</Button>
		</Modal>
	)
})

export default DownloadModal
