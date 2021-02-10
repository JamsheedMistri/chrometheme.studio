import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { GlobalProvider } from '../context/GlobalContext';
import BrowserPreview from '../components/BrowserPreview';
import MainContent from '../components/MainContent';
import Navbar from '../components/Navbar';
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
				</Head>
				<Navbar />
				<div className={styles.container}>
					<MainContent />
					<div className={styles.browserPreview}>
						<BrowserPreview />
					</div>
				</div>
			</ThemeProvider>
		</GlobalProvider>
	);
}
