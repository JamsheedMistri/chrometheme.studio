import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export function getFrameColor() {
	const { colors, inactive, incognito } = useContext(GlobalContext);
	if (inactive && incognito) {
		// inactive and incognito
		return colors.frameIncognitoInactive;
	} else if (!inactive && incognito) {
		// active and incognito
		return colors.frameIncognito;
	} else if (inactive && !incognito) {
		// inactive regular
		return colors.frameInactive;
	} else if (!inactive && !incognito) {
		// active regular
		return colors.frame;
	}
}

export function getToolbarColor() {
	const { colors } = useContext(GlobalContext);
	return colors.toolbar;
}

export function getBackgroundTabColor() {
	const { colors, inactive, incognito } = useContext(GlobalContext);
	if (inactive && incognito) {
		// inactive and incognito
		return colors.backgroundTabIncognitoInactive;
	} else if (!inactive && incognito) {
		// active and incognito
		return colors.backgroundTabIncognito;
	} else if (inactive && !incognito) {
		// inactive regular
		return colors.backgroundTabInactive;
	} else if (!inactive && !incognito) {
		// active regular
		return colors.backgroundTab;
	}
}

export function getBookmarkTextColor() {
	const { colors } = useContext(GlobalContext);
	return colors.bookmarkText;
}

export function getTabTextColor() {
	const { colors } = useContext(GlobalContext);
	return colors.tabText;
}

export function getTabBackgroundTextColor() {
	const { colors, inactive, incognito } = useContext(GlobalContext);
	if (inactive && incognito) {
		// inactive and incognito
		return colors.tabBackgroundTextIncognitoInactive;
	} else if (!inactive && incognito) {
		// active and incognito
		return colors.tabBackgroundTextIncognito;
	} else if (inactive && !incognito) {
		// inactive regular
		return colors.tabBackgroundTextInactive;
	} else if (!inactive && !incognito) {
		// active regular
		return colors.tabBackgroundText;
	}
}

export function getToolbarButtonIconColor() {
	const { colors } = useContext(GlobalContext);
	return colors.toolbarButtonIcon;
}

export function getOmniboxTextColor() {
	const { colors } = useContext(GlobalContext);
	return colors.omniboxText;
}

export function getOmniboxBackgroundColor() {
	const { colors } = useContext(GlobalContext);
	return colors.omniboxBackground;
}

export function isIncognito() {
	const { incognito } = useContext(GlobalContext);
	return incognito;
}
