import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export const getFrameColor = () => {
	const { colors, inactive, incognito } = useContext(GlobalContext)
	if (inactive && incognito) {
		// inactive and incognito
		return colors['frame_incognito_inactive']
	} else if (!inactive && incognito) {
		// active and incognito
		return colors['frame_incognito']
	} else if (inactive && !incognito) {
		// inactive regular
		return colors['frame_inactive']
	} else if (!inactive && !incognito) {
		// active regular
		return colors['frame']
	}
}

export const getToolbarColor = () => {
	const { colors } = useContext(GlobalContext)
	return colors['toolbar']
}

export const getBackgroundTabColor = () => {
	const { colors, inactive, incognito } = useContext(GlobalContext)
	if (inactive && incognito) {
		// inactive and incognito
		return colors['background_tab_incognito_inactive']
	} else if (!inactive && incognito) {
		// active and incognito
		return colors['background_tab_incognito']
	} else if (inactive && !incognito) {
		// inactive regular
		return colors['background_tab_inactive']
	} else if (!inactive && !incognito) {
		// active regular
		return colors['background_tab']
	}
}

export const getBookmarkTextColor = () => {
	const { colors } = useContext(GlobalContext)
	return colors['bookmark_text']
}

export const getTabTextColor = () => {
	const { colors } = useContext(GlobalContext)
	return colors['tab_text']
}

export const getTabBackgroundTextColor = () => {
	const { colors, inactive, incognito } = useContext(GlobalContext)
	if (inactive && incognito) {
		// inactive and incognito
		return colors['tab_background_text_incognito_inactive']
	} else if (!inactive && incognito) {
		// active and incognito
		return colors['tab_background_text_incognito']
	} else if (inactive && !incognito) {
		// inactive regular
		return colors['tab_background_text_inactive']
	} else if (!inactive && !incognito) {
		// active regular
		return colors['tab_background_text']
	}
}

export const getToolbarButtonIconColor = () => {
	const { colors } = useContext(GlobalContext)
	return colors['toolbar_button_icon']
}

export const getOmniboxTextColor = () => {
	const { colors } = useContext(GlobalContext)
	return colors['omnibox_text']
}

export const getOmniboxBackgroundColor = () => {
	const { colors } = useContext(GlobalContext)
	return colors['omnibox_background']
}

export const isIncognito = () => {
	const { incognito } = useContext(GlobalContext)
	return incognito
}
