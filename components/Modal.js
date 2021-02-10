import { Card, Modal as MaterialModal } from '@material-ui/core';
import styles from '../styles/Modal.module.css';

export default ({ children, open, onClose }) => (
	<MaterialModal open={open} onClose={onClose} className={styles.modal}>
		<Card className={styles.card} variant="outlined">
			{children}
		</Card>
	</MaterialModal>
)
