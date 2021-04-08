import '../styles/globals.css'
import { GlobalProvider } from '../context/GlobalContext'

const App = ({ Component, pageProps }) => {
	return (
		<GlobalProvider>
			<Component {...pageProps} />
		</GlobalProvider>
	)
}

export default App
