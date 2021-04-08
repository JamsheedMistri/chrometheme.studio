import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Button from '@material-ui/core/Button'
import Modal from '../Modal'
import styles from '../../styles/modals/ShareModal.module.css'

const ShareModal = React.memo(() => {
	const { modals, updateModal, shareResponse } = useContext(GlobalContext)

	if (shareResponse == null || shareResponse.error) return null

	const closeShareModal = () => updateModal('share', false)
	const handleFocus = (event) => event.target.select()
	const handleChange = (event) => event.preventDefault()
	const shareURL = `${window.location.origin}/share/${shareResponse.id}`
	const copyText = () => navigator.clipboard.writeText(shareURL)

	return (
		<Modal open={modals.share} onClose={closeShareModal}>
			<h1>Share Theme</h1>
			<p>If you want to share your new custom theme with others, you can copy the link below.</p>

			<div className={styles.copyRow}>
				<input
					type="text"
					value={shareURL}
					onChange={handleChange}
					onClick={handleFocus}
					className={styles.copyText}
				/>
				<Button
					variant="contained"
					color="primary"
					className={styles.copyButton}
					onClick={copyText}
				>
					Copy
				</Button>
			</div>
			<Button variant="contained" color="secondary" onClick={closeShareModal}>
				Close
			</Button>
		</Modal>
	)
})

export default ShareModal
