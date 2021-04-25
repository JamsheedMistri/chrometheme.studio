import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Button from '@material-ui/core/Button'
import Modal from '../Modal'
import styles from '../../styles/modals/WelcomeModal.module.css'

const WelcomeModal = React.memo(() => {
	const { modals, updateModal } = useContext(GlobalContext)
	const closeWelcomeModal = () => updateModal('welcome', false)

	return (
		<Modal open={modals.welcome} onClose={closeWelcomeModal}>
			<h1 className={styles.welcomeHeader}>Welcome to Chrome Theme Studio</h1>
			<a
				href="https://www.producthunt.com/posts/chrome-theme-studio?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-chrome-theme-studio"
				target="_blank"
				className={styles.productHunt}
			>
				<img
					src="/producthunt.svg"
					alt="Chrome Theme Studio - Easily create a theme for most Chromium-based browsers | Product Hunt"
				/>
			</a>
			<div className={styles.welcomeContainer}>
				<article>
					<div className={styles.stepIcon}>1</div>
					Adjust different parts of the theme using the square buttons next to each label
				</article>
				<article>
					<div className={styles.stepIcon}>2</div>
					View different states of the browser by toggling <b>Inactive</b> and <b>Incognito</b>{' '}
					modes
				</article>
				<article className={styles.colSpan2}>
					<div className={styles.stepIcon}>3</div>
					Download your theme and use it on browsers like Google Chrome, Microsoft Edge, or Brave
					for free
				</article>
			</div>
			<div className={styles.getStartedButton}>
				<Button variant="contained" color="primary" onClick={closeWelcomeModal}>
					Get Started
				</Button>
			</div>
		</Modal>
	)
})

export default WelcomeModal
