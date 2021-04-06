import styles from '../styles/Home.module.css';
import Template from '../components/Template';
import BrowserStateControls from '../components/BrowserStateControls';
import BrowserPreview from '../components/BrowserPreview';
import Controls from '../components/Controls';
import Navbar from '../components/Navbar';
import WelcomeModal from '../components/modals/WelcomeModal';
import DownloadModal from '../components/modals/DownloadModal';
import ResetModal from '../components/modals/ResetModal';
import ShareModal from '../components/modals/ShareModal';

const Home = () => (
	<Template>
		<Navbar showButtons />
		<div className={styles.container}>
			<div className={styles.controls}>
				<Controls />
			</div>
			<div className={styles.browser}>
				<BrowserStateControls />
				<BrowserPreview />
			</div>
		</div>
		<WelcomeModal />
		<ResetModal />
		<DownloadModal />
		<ShareModal />
	</Template>
);

export default Home;
