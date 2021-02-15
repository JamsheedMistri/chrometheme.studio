import styles from '../styles/Navbar.module.css';
import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { downloadTheme } from '../utils/DownloadTheme';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function Navbar() {
	const { colors, setDownloadModalVisible, setResetModalVisible } = useContext(GlobalContext);

	const [anchorEl, setAnchorEl] = useState(false);
	const menuOpen = Boolean(anchorEl);

	const handleMenuChange = (event) => {
		setAuth(event.target.checked);
	};

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const download = () => {
		downloadTheme(colors);
		setDownloadModalVisible(true);
		handleMenuClose();
	}

	const reset = () => {
		setResetModalVisible(true);
		handleMenuClose();
	}

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" className={styles.title}>
					Chrome Theme Studio
				</Typography>

				<div className={styles.mobileMenu}>
					<Button onClick={handleMenu}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18">
							<path d="M2 13.5h14V12H2v1.5zm0-4h14V8H2v1.5zM2 4v1.5h14V4H2z"/>
						</svg>
					</Button>

					<Menu
						id="menu"
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={menuOpen}
						onClose={handleMenuClose}
					>
						<MenuItem onClick={reset}>Reset Colors</MenuItem>
						<MenuItem onClick={download}>Download Theme</MenuItem>
					</Menu>
				</div>

				<div className={styles.desktopMenu}>
					<Button className={styles.resetButton} onClick={reset}>Reset Colors</Button>
					<Button variant="contained" onClick={download}>Download Theme</Button>
				</div>
			</Toolbar>
		</AppBar>
	);
}
