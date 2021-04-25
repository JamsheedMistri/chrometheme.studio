import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import { lightBlue, red } from '@material-ui/core/colors'

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: lightBlue[900],
		},
		secondary: {
			main: red[900],
		},
	},
})

const Template = React.memo(({ children }) => (
	<>
		<ThemeProvider theme={theme}>
			<Head>
				<title>Chrome Theme Studio</title>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Create your own custom browser theme for Chromium-based browsers, including Google Chrome, Microsoft Edge, and Brave, for free."
				/>
				<meta name="author" content="Jamsheed Mistri" />
			</Head>
			{children}
		</ThemeProvider>
		<style jsx global>{`
			body {
				background: #161717;
			}
		`}</style>
	</>
))

export default Template
