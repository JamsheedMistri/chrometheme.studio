import Modal from '../Modal';
import Button from '@material-ui/core/Button';
import styles from '../../styles/modals/WelcomeModal.module.css';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

export default function WelcomeModal() {
	const { welcomeModal, setWelcomeModalVisible } = useContext(GlobalContext);
	const closeWelcomeModal = () => setWelcomeModalVisible(false);

	return (
		<Modal open={welcomeModal} onClose={closeWelcomeModal}>
			<h1 className={styles.welcomeHeader}>Welcome to Chrome Theme Studio</h1>
			<div className={styles.welcomeContainer}>
				<article>
					<div className={styles.stepIcon}>1</div>
					Adjust different parts of the theme using the square buttons next to each label
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
	);
}
