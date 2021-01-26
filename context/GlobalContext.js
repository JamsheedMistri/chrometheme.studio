import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	// Colors
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
			name: "Frame Color",
			color: frame,
			update: setFrame
		},
		{
			name: "Inactive Frame Color",
			color: frameInactive,
			update: setFrameInactive
		},
		{
			name: "Incognito Frame Color",
			color: frameIncognito,
			update: setFrameIncognito
		},
		{
			name: "Inactive Incognito Frame Color",
			color: frameIncognitoInactive,
			update: setFrameIncognitoInactive
		},
		{
			name: "Background Tab Color",
			color: backgroundTab,
			update: setBackgroundTab
		},
		{
			name: "Inactive Background Tab Color",
			color: backgroundTabInactive,
			update: setBackgroundTabInactive
		},
		{
			name: "Incognito Background Tab Color",
			color: backgroundTabIncognito,
			update: setBackgroundTabIncognito
		},
		{
			name: "Inactive Incognito Background Tab Color",
			color: backgroundTabIncognitoInactive,
			update: setBackgroundTabIncognitoInactive
		},
		{
			name: "Bookmark Text Color",
			color: bookmarkText,
			update: setBookmarkText
		},
		{
			name: "Background Tab Text Color",
			color: tabBackgroundText,
			update: setTabBackgroundText
		},
		{
			name: "Inactive Background Tab Text Color",
			color: tabBackgroundTextInactive,
			update: setTabBackgroundTextInactive
		},
		{
			name: "Incognito Background Tab Text Color",
			color: tabBackgroundTextIncognito,
			update: setTabBackgroundTextIncognito
		},
		{
			name: "Inactive Incognito Background Tab Text Color",
			color: tabBackgroundTextIncognitoInactive,
			update: setTabBackgroundTextIncognitoInactive
		},
		{
			name: "Tab Text Color",
			color: tabText,
			update: setTabText
		},
		{
			name: "Toolbar Color",
			color: toolbar,
			update: setToolbar
		},
		{
			name: "Toolbar Button Icon Color",
			color: toolbarButtonIcon,
			update: setToolbarButtonIcon
		},
		{
			name: "URL Bar Text Color",
			color: omniboxText,
			update: setOmniboxText
		},
		{
			name: "URL Bar Background Color",
			color: omniboxBackground,
			update: setOmniboxBackground
		},
	];

	const [currentCategory, setCurrentCategory] = useState(colorCategories[0]);
	
	// Browser state
	const [inactive, setInactive] = useState(false);
	const [incognito, setIncognito] = useState(false);

	return (
		<GlobalContext.Provider value={{
			currentCategory,
			setCurrentCategory,
			colorCategories,
			colors,
			inactive,
			setInactive,
			incognito,
			setIncognito,
		}}>
			{children}
		</GlobalContext.Provider>
	);
}
