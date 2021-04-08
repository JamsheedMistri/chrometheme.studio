import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Button from '@material-ui/core/Button'
import Modal from '../Modal'
import styles from '../../styles/modals/ResetModal.module.css'

const ResetModal = React.memo(() => {
	const { modals, updateModal, resetToDefaults, setInactive, setIncognito } = useContext(
		GlobalContext
	)
	const closeResetModal = () => updateModal('reset', false)

	const confirm = () => {
		setInactive(false)
		setIncognito(false)
		resetToDefaults()
		closeResetModal()
	}

	return (
		<Modal open={modals.reset} onClose={closeResetModal}>
			<h1>Are you sure?</h1>
			<p>Are you sure you want to reset the colors? You will lose all of your progress.</p>
			<Button
				variant="contained"
				color="secondary"
				className={styles.resetButton}
				onClick={confirm}
			>
				Reset
			</Button>
			<Button onClick={closeResetModal}>cancel</Button>
		</Modal>
	)
})

export default ResetModal
