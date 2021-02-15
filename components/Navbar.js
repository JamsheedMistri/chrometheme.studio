import styles from '../styles/Navbar.module.css';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { downloadTheme } from '../utils/DownloadTheme';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function Navbar() {
	const { colors, resetToDefaults, setDownloadModalVisible } = useContext(GlobalContext);
	const download = () => {
		downloadTheme(colors);
		setDownloadModalVisible(true);
	}

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" className={styles.title}>
					Chrome Theme Studio
				</Typography>
				<Button className={styles.resetButton} onClick={resetToDefaults}>Reset Colors</Button>
				<Button variant="contained" onClick={download}>Download Theme</Button>
			</Toolbar>
		</AppBar>
	);
}
