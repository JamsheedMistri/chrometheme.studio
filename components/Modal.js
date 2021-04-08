import React from 'react'
import { Card, Modal as MaterialModal } from '@material-ui/core'
import styles from '../styles/Modal.module.css'

const Modal = React.memo(({ children, open, onClose }) => (
	<MaterialModal open={open} onClose={onClose} className={styles.modal}>
		<Card className={styles.card} variant="outlined">
			{children}
		</Card>
	</MaterialModal>
))

export default Modal
