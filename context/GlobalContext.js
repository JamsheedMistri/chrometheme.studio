import { createContext, useState, useEffect, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
	colors: {
		frame: '#dee1e6',
		frame_inactive: '#e7eaed',
		frame_incognito: '#202124',
		frame_incognito_inactive: '#3c4043',
		background_tab: '#dee1e6',
		background_tab_inactive: '#e7eaed',
		background_tab_incognito: '#202124',
		background_tab_incognito_inactive: '#3c4043',
		bookmark_text: '#3a3e41',
		tab_background_text: '#3c4043',
		tab_background_text_inactive: '#666a6d',
		tab_background_text_incognito: '#bdc1c6',
		tab_background_text_incognito_inactive: '#a7abae',
		tab_text: '#3c4043',
		toolbar: '#ffffff',
		toolbar_button_icon: '#626365',
		omnibox_text: '#202124',
		omnibox_background: '#e9ebec',
	},
	modals: {
		welcome: true,
		reset: false,
		download: false,
		share: false,
	},
}

const colorData = {
	frame: {
		name: 'Frame',
		type: 'active',
	},
	frame_inactive: {
		name: 'Frame',
		type: 'inactive',
	},
	frame_incognito: {
		name: 'Frame',
		type: 'incognito',
	},
	frame_incognito_inactive: {
		name: 'Frame',
		type: 'incognito_inactive',
	},
	background_tab: {
		name: 'Background Tab',
		type: 'active',
	},
	background_tab_inactive: {
		name: 'Background Tab',
		type: 'inactive',
	},
	background_tab_incognito: {
		name: 'Background Tab',
		type: 'incognito',
	},
	background_tab_incognito_inactive: {
		name: 'Background Tab',
		type: 'incognito_inactive',
	},
	bookmark_text: {
		name: 'Bookmark Text',
		type: 'universal',
	},
	tab_background_text: {
		name: 'Background Tab Text',
		type: 'active',
	},
	tab_background_text_inactive: {
		name: 'Background Tab Text',
		type: 'inactive',
	},
	tab_background_text_incognito: {
		name: 'Background Tab Text',
		type: 'incognito',
	},
	tab_background_text_incognito_inactive: {
		name: 'Background Tab Text',
		type: 'incognito_inactive',
	},
	tab_text: {
		name: 'Tab Text',
		type: 'universal',
	},
	toolbar: {
		name: 'Toolbar',
		type: 'universal',
	},
	toolbar_button_icon: {
		name: 'Toolbar Button Icon',
		type: 'universal',
	},
	omnibox_text: {
		name: 'URL Bar Text',
		type: 'universal',
	},
	omnibox_background: {
		name: 'URL Bar Background',
		type: 'universal',
	},
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState)

	// Actions
	const updateColor = (id, newColor) => {
		dispatch({
			type: 'UPDATE_COLOR',
			id,
			newColor,
		})
	}

	const resetToDefaults = () => {
		dispatch({
			type: 'RESET_TO_DEFAULTS',
			initialState,
		})
	}

	const importColors = (colors) => {
		dispatch({
			type: 'IMPORT_COLORS',
			colors,
		})
	}

	const updateModal = (id, newValue) => {
		dispatch({
			type: 'UPDATE_MODAL',
			id,
			newValue,
		})
	}

	const [inactive, setInactive] = useState(false)
	const [incognito, setIncognito] = useState(false)
	const [shareResponse, setShareResponse] = useState(null)

	return (
		<GlobalContext.Provider
			value={{
				colors: state.colors,
				modals: state.modals,
				colorData,
				updateColor,
				resetToDefaults,
				importColors,
				updateModal,
				inactive,
				setInactive,
				incognito,
				setIncognito,
				shareResponse,
				setShareResponse,
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}
