import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { GlobalProvider } from '../context/GlobalContext';
import BrowserStateControls from '../components/BrowserStateControls';
import BrowserPreview from '../components/BrowserPreview';
import Controls from '../components/Controls';
import Navbar from '../components/Navbar';
import WelcomeModal from '../components/modals/WelcomeModal';
import DownloadModal from '../components/modals/DownloadModal';
import ResetModal from '../components/modals/ResetModal';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { lightBlue, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: lightBlue[900],
		},
		secondary: {
			main: red[900]
		}
	}
});

export default function Home() {
	return (
		<GlobalProvider>
			<ThemeProvider theme={theme}>
				<Head>
					<title>Chrome Theme Studio</title>
					<link rel="icon" href="/favicon.ico" />
					<meta name="description" content="Create your own custom browser theme for Chromium-based browsers, including Google Chrome and Microsoft Edge, for free." />
					<meta name="author" content="Jamsheed Mistri" />
				</Head>

				<Navbar />

				<div className={styles.container}>
					<div className={styles.controls}>
						<Controls />
					</div>
					<div className={styles.browser}>
						<BrowserStateControls />
						<BrowserPreview />
					</div>
				</div>

				<DownloadModal />
				<WelcomeModal />
				<ResetModal />
			</ThemeProvider>
			<style jsx global>{`
				body {
					background: #161717;
				}
			`}</style>
		</GlobalProvider>

	);
}
