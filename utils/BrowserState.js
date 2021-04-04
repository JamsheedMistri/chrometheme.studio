import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export function getFrameColor() {
	const { colors, inactive, incognito } = useContext(GlobalContext);
	if (inactive && incognito) {
		// inactive and incognito
		return colors['frame_incognito_inactive'];
	} else if (!inactive && incognito) {
		// active and incognito
		return colors['frame_incognito'];
	} else if (inactive && !incognito) {
		// inactive regular
		return colors['frame_inactive'];
	} else if (!inactive && !incognito) {
		// active regular
		return colors['frame'];
	}
}

export function getToolbarColor() {
	const { colors } = useContext(GlobalContext);
	return colors['toolbar'];
}

export function getBackgroundTabColor() {
	const { colors, inactive, incognito } = useContext(GlobalContext);
	if (inactive && incognito) {
		// inactive and incognito
		return colors['background_tab_incognito_inactive'];
	} else if (!inactive && incognito) {
		// active and incognito
		return colors['background_tab_incognito'];
	} else if (inactive && !incognito) {
		// inactive regular
		return colors['background_tab_inactive'];
	} else if (!inactive && !incognito) {
		// active regular
		return colors['background_tab'];
	}
}

export function getBookmarkTextColor() {
	const { colors } = useContext(GlobalContext);
	return colors['bookmark_text'];
}

export function getTabTextColor() {
	const { colors } = useContext(GlobalContext);
	return colors['tab_text'];
}

export function getTabBackgroundTextColor() {
	const { colors, inactive, incognito } = useContext(GlobalContext);
	if (inactive && incognito) {
		// inactive and incognito
		return colors['tab_background_text_incognito_inactive'];
	} else if (!inactive && incognito) {
		// active and incognito
		return colors['tab_background_text_incognito'];
	} else if (inactive && !incognito) {
		// inactive regular
		return colors['tab_background_text_inactive'];
	} else if (!inactive && !incognito) {
		// active regular
		return colors['tab_background_text'];
	}
}

export function getToolbarButtonIconColor() {
	const { colors } = useContext(GlobalContext);
	return colors['toolbar_button_icon'];
}

export function getOmniboxTextColor() {
	const { colors } = useContext(GlobalContext);
	return colors['omnibox_text'];
}

export function getOmniboxBackgroundColor() {
	const { colors } = useContext(GlobalContext);
	return colors['omnibox_background'];
}

export function isIncognito() {
	const { incognito } = useContext(GlobalContext);
	return incognito;
}
