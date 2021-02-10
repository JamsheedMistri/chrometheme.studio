import { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const [frame, setFrame] = useState('#dee1e6');
	const [frameInactive, setFrameInactive] = useState('#e7eaed');
	const [frameIncognito, setFrameIncognito] = useState('#202124');
	const [frameIncognitoInactive, setFrameIncognitoInactive] = useState('#3c4043');
	const [backgroundTab, setBackgroundTab] = useState('#dee1e6');
	const [backgroundTabInactive, setBackgroundTabInactive] = useState('#e7eaed');
	const [backgroundTabIncognito, setBackgroundTabIncognito] = useState('#202124');
	const [backgroundTabIncognitoInactive, setBackgroundTabIncognitoInactive] = useState('#3c4043');
	const [bookmarkText, setBookmarkText] = useState('#3a3e41');
	const [tabBackgroundText, setTabBackgroundText] = useState('#3c4043');
	const [tabBackgroundTextInactive, setTabBackgroundTextInactive] = useState('#666a6d');
	const [tabBackgroundTextIncognito, setTabBackgroundTextIncognito] = useState('#bdc1c6');
	const [tabBackgroundTextIncognitoInactive, setTabBackgroundTextIncognitoInactive] = useState('#a7abae');
	const [tabText, setTabText] = useState('#3c4043');
	const [toolbar, setToolbar] = useState('#ffffff');
	const [toolbarButtonIcon, setToolbarButtonIcon] = useState('#626365');
	const [omniboxText, setOmniboxText] = useState('#202124');
	const [omniboxBackground, setOmniboxBackground] = useState('#e9ebec');

	const colors = {
		frame,
		frameInactive,
		frameIncognito,
		frameIncognitoInactive,
		backgroundTab,
		backgroundTabInactive,
		backgroundTabIncognito,
		backgroundTabIncognitoInactive,
		bookmarkText,
		tabBackgroundText,
		tabBackgroundTextInactive,
		tabBackgroundTextIncognito,
		tabBackgroundTextIncognitoInactive,
		tabText,
		toolbar,
		toolbarButtonIcon,
		omniboxText,
		omniboxBackground,
	};
	
	const colorCategories = [
		{
			id: "frame_active",
			name: "Frame",
			color: frame,
			update: setFrame,
			type: "active",
		},
		{
			id: "frame_inactive",
			name: "Frame",
			color: frameInactive,
			update: setFrameInactive,
			type: "inactive",
		},
		{
			id: "frame_incognito",
			name: "Frame",
			color: frameIncognito,
			update: setFrameIncognito,
			type: "incognito",
		},
		{
			id: "frame_incognito_inactive",
			name: "Frame",
			color: frameIncognitoInactive,
			update: setFrameIncognitoInactive,
			type: "inactive_incognito",
		},
		{
			id: "background_tab_active",
			name: "Background Tab",
			color: backgroundTab,
			update: setBackgroundTab,
			type: "active",
		},
		{
			id: "background_tab_inactive",
			name: "Background Tab",
			color: backgroundTabInactive,
			update: setBackgroundTabInactive,
			type: "inactive",
		},
		{
			id: "background_tab_incognito",
			name: "Background Tab",
			color: backgroundTabIncognito,
			update: setBackgroundTabIncognito,
			type: "incognito",
		},
		{
			id: "background_tab_inactive_incognito",
			name: "Background Tab",
			color: backgroundTabIncognitoInactive,
			update: setBackgroundTabIncognitoInactive,
			type: "inactive_incognito",
		},
		{
			id: "background_tab_text_active",
			name: "Background Tab Text",
			color: tabBackgroundText,
			update: setTabBackgroundText,
			type: "active",
		},
		{
			id: "background_tab_text_inactive",
			name: "Background Tab Text",
			color: tabBackgroundTextInactive,
			update: setTabBackgroundTextInactive,
			type: "inactive",
		},
		{
			id: "background_tab_text_incognito",
			name: "Background Tab Text",
			color: tabBackgroundTextIncognito,
			update: setTabBackgroundTextIncognito,
			type: "incognito",
		},
		{
			id: "background_tab_text_inactive_incognito",
			name: "Background Tab Text",
			color: tabBackgroundTextIncognitoInactive,
			update: setTabBackgroundTextIncognitoInactive,
			type: "inactive_incognito",
		},
		{
			id: "toolbar",
			name: "Toolbar",
			color: toolbar,
			update: setToolbar,
			type: "universal",
		},
		{
			id: "toolbar_button_icon",
			name: "Toolbar Button Icon",
			color: toolbarButtonIcon,
			update: setToolbarButtonIcon,
			type: "universal",
		},
		{
			id: "omnibox_text",
			name: "URL Bar Text",
			color: omniboxText,
			update: setOmniboxText,
			type: "universal",
		},
		{
			id: "omnibox_background",
			name: "URL Bar Background",
			color: omniboxBackground,
			update: setOmniboxBackground,
			type: "universal",
		},
		{
			id: "tab_text",
			name: "Tab Text",
			color: tabText,
			update: setTabText,
			type: "universal",
		},
		{
			id: "bookmark_text",
			name: "Bookmark Text",
			color: bookmarkText,
			update: setBookmarkText,
			type: "universal",
		},
	];

	const resetToDefaults = () => {
		setFrame('#dee1e6');
		setFrameInactive('#e7eaed');
		setFrameIncognito('#202124');
		setFrameIncognitoInactive('#3c4043');
		setBackgroundTab('#dee1e6');
		setBackgroundTabInactive('#e7eaed');
		setBackgroundTabIncognito('#202124');
		setBackgroundTabIncognitoInactive('#3c4043');
		setBookmarkText('#3a3e41');
		setTabBackgroundText('#3c4043');
		setTabBackgroundTextInactive('#666a6d');
		setTabBackgroundTextIncognito('#bdc1c6');
		setTabBackgroundTextIncognitoInactive('#a7abae');
		setTabText('#3c4043');
		setToolbar('#ffffff');
		setToolbarButtonIcon('#626365');
		setOmniboxText('#202124');
		setOmniboxBackground('#e9ebec');
	}

	const [inactive, setInactive] = useState(false);
	const [incognito, setIncognito] = useState(false);

	const [downloadModal, setDownloadModalVisible] = useState(false);

	return (
		<GlobalContext.Provider value={{
			colorCategories,
			colors,
			inactive,
			setInactive,
			incognito,
			setIncognito,
			resetToDefaults,
			downloadModal,
			setDownloadModalVisible,
		}}>
			{children}
		</GlobalContext.Provider>
	);
}
