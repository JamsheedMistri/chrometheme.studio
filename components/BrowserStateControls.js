import Toolbar from './Toolbar';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import styles from '../styles/BrowserStateControls.module.css';
import Switch from '@material-ui/core/Switch';

export default function BrowserStateControls() {
	const {
		incognito,
		setIncognito,
		inactive,
		setInactive,
	} = useContext(GlobalContext);

	const toggleInactive = event => setInactive(event.target.checked);
	const toggleIncognito = event => setIncognito(event.target.checked);

	return (
		<div className={styles.container}>
			<div>
				<label htmlFor="incognito">Incognito</label>
				<Switch checked={incognito} onChange={toggleIncognito} color="primary" />
			</div>

			<div>
				<label htmlFor="inactive">Inactive</label>
				<Switch checked={inactive} onChange={toggleInactive} color="primary" />
			</div>
		</div>
	);
}
