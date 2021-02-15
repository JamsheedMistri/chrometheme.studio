import Modal from '../Modal';
import Button from '@material-ui/core/Button';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import styles from '../../styles/modals/ResetModal.module.css';

export default function ResetModal() {
	const { resetToDefaults, resetModal, setResetModalVisible } = useContext(GlobalContext);
	const closeResetModal = () => setResetModalVisible(false);

	const confirm = () => {
		resetToDefaults();
		closeResetModal();
	}

	return (
		<Modal open={resetModal} onClose={closeResetModal}>
			<h1>Are you sure?</h1>
			<p>Are you sure you want to reset the colors? You will lose all of your progress.</p>
			<Button
				variant="contained"
				color="secondary"
				className={styles.resetButton}
				onClick={confirm}
			>Reset</Button>
			<Button onClick={closeResetModal}>cancel</Button>
		</Modal>
	);
}
