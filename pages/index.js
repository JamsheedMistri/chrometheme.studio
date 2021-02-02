import Head from 'next/head';
import styles from '../styles/Home.module.css';
import BrowserPreview from '../components/BrowserPreview';
import MainContent from '../components/MainContent';
import { GlobalProvider } from '../context/GlobalContext';

export default function Home() {
	return (
		<GlobalProvider>
			<Head>
				<title>Chrome Theme Studio</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.container}>
				<MainContent />
				<div className={styles.browserPreview}>
					<BrowserPreview />
				</div>
			</div>
		</GlobalProvider>
	);
}
