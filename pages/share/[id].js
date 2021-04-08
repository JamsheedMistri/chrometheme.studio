import { useRouter } from 'next/router'
import Link from 'next/link'
import { GlobalContext } from '../../context/GlobalContext'
import React, { useContext, useState } from 'react'
import Template from '../../components/Template'
import Navbar from '../../components/Navbar'
import BrowserPreview from '../../components/BrowserPreview'
import DownloadModal from '../../components/modals/DownloadModal'
import ShareModal from '../../components/modals/ShareModal'
import Button from '@material-ui/core/Button'
import { downloadTheme } from '../../utils/DownloadTheme'
import styles from '../../styles/Share.module.css'

const Share = () => {
	const { colors, importColors, updateModal, setShareResponse } = useContext(GlobalContext)
	const router = useRouter()
	const { id } = router.query
	const [loadedTheme, setLoadedTheme] = useState(false)

	const download = () => {
		updateModal('download', true)
		downloadTheme(colors)
		setShareResponse({
			status: 'success',
			id,
		})
	}

	if (!loadedTheme) {
		fetch(`/api/themes/${id}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((json) => {
				if (json.status !== 'success') return
				setLoadedTheme(true)
				importColors(json.theme)
			})
	}

	const browserPreviewStyle = loadedTheme ? { bottom: '-75vh' } : {}

	return (
		<Template>
			<Navbar />
			<div className={styles.container}>
				<div>
					<h1>Download Theme</h1>
					<p>
						Someone sent you a custom-made Chrome theme! In order to download it, click on the
						download button below. A preview of the theme is shown below for your convenience.
					</p>
					<p>
						This theme will work on Google Chrome, Microsoft Edge, and other Chromium-based browsers
						that support native Chromium themes.
					</p>
					<p>After you click the download button, installation instructions will be displayed.</p>
					<Button variant="contained" color="primary" onClick={download} disabled={!loadedTheme}>
						{loadedTheme ? 'Download' : 'Loading...'}
					</Button>
				</div>
				<div className={styles.whatIs}>
					<h1>What is Chrome Theme Studio?</h1>
					<p>
						<Link href="/">Chrome Theme Studio</Link> is a tool that allows anyone to create a
						custom browser theme. It works for most Chromium-based browsers, including Google Chrome
						and Microsoft Edge.
					</p>
					<p>
						Want to try making your own custom theme? It's easy! Click the button below to enter the
						studio.
					</p>
					<Link href="/">
						<Button variant="contained" color="primary">
							Studio
						</Button>
					</Link>
				</div>
			</div>
			<div className={styles.browser} style={browserPreviewStyle}>
				<BrowserPreview />
			</div>
			<DownloadModal />
			<ShareModal />
		</Template>
	)
}

export default Share
