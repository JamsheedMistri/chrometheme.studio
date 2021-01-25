import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const [frame, setFrame] = useState('#dee1e6');
	const [frameInactive, setFrameInactive] = useState();
	const [frameIncognito, setFrameIncognito] = useState();
	const [frameIncognitoInactive, setFrameIncognitoInactive] = useState();
	const [backgroundTab, setBackgroundTab] = useState('#edeff2');
	const [backgroundTabInactive, setBackgroundTabInactive] = useState();
	const [backgroundTabIncognito, setBackgroundTabIncognito] = useState();
	const [backgroundTabIncognitoInactive, setBackgroundTabIncognitoInactive] = useState();
	const [bookmarkText, setBookmarkText] = useState();
	const [buttonBackground, setButtonBackground] = useState();
	const [tabBackgroundText, setTabBackgroundText] = useState();
	const [tabBackgroundTextInactive, setTabBackgroundTextInactive] = useState();
	const [tabBackgroundTextIncognito, setTabBackgroundTextIncognito] = useState();
	const [tabBackgroundTextIncognitoInactive, setTabBackgroundTextIncognitoInactive] = useState();
	const [tabText, setTabText] = useState();
	const [toolbar, setToolbar] = useState('#ffffff');
	const [toolbarButtonIcon, setToolbarButtonIcon] = useState();
	const [omniboxText, setOmniboxText] = useState();
	const [omniboxBackground, setOmniboxBackground] = useState();
	const [ntpBackground, setNtpBackground] = useState();
	const [ntpHeader, setNtpHeader] = useState();
	const [ntpLink, setNtpLink] = useState();
	const [ntpText, setNtpText] = useState();

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
		buttonBackground,
		tabBackgroundText,
		tabBackgroundTextInactive,
		tabBackgroundTextIncognito,
		tabBackgroundTextIncognitoInactive,
		tabText,
		toolbar,
		toolbarButtonIcon,
		omniboxText,
		omniboxBackground,
		ntpBackground,
		ntpHeader,
		ntpLink,
		ntpText,
	};
	
	const categories = [
		{
			name: "Frame Color",
			color: frame,
			update: setFrame
		},
		{
			name: "",
			color: frameInactive,
			update: setFrameInactive
		},
		{
			name: "",
			color: frameIncognito,
			update: setFrameIncognito
		},
		{
			name: "",
			color: frameIncognitoInactive,
			update: setFrameIncognitoInactive
		},
		{
			name: "Background Tab Color",
			color: backgroundTab,
			update: setBackgroundTab
		},
		{
			name: "",
			color: backgroundTabInactive,
			update: setBackgroundTabInactive
		},
		{
			name: "",
			color: backgroundTabIncognito,
			update: setBackgroundTabIncognito
		},
		{
			name: "",
			color: backgroundTabIncognitoInactive,
			update: setBackgroundTabIncognitoInactive
		},
		{
			name: "",
			color: bookmarkText,
			update: setBookmarkText
		},
		{
			name: "",
			color: buttonBackground,
			update: setButtonBackground
		},
		{
			name: "",
			color: tabBackgroundText,
			update: setTabBackgroundText
		},
		{
			name: "",
			color: tabBackgroundTextInactive,
			update: setTabBackgroundTextInactive
		},
		{
			name: "",
			color: tabBackgroundTextIncognito,
			update: setTabBackgroundTextIncognito
		},
		{
			name: "",
			color: tabBackgroundTextIncognitoInactive,
			update: setTabBackgroundTextIncognitoInactive
		},
		{
			name: "",
			color: tabText,
			update: setTabText
		},
		{
			name: "Toolbar Color",
			color: toolbar,
			update: setToolbar
		},
		{
			name: "",
			color: toolbarButtonIcon,
			update: setToolbarButtonIcon
		},
		{
			name: "",
			color: omniboxText,
			update: setOmniboxText
		},
		{
			name: "",
			color: omniboxBackground,
			update: setOmniboxBackground
		},
		{
			name: "",
			color: ntpBackground,
			update: setNtpBackground
		},
		{
			name: "",
			color: ntpHeader,
			update: setNtpHeader
		},
		{
			name: "",
			color: ntpLink,
			update: setNtpLink
		},
		{
			name: "",
			color: ntpText,
			update: setNtpText
		},
	];
	const [currentCategory, setCurrentCategory] = useState(categories[0]);

	return (
		<GlobalContext.Provider value={{
			currentCategory,
			setCurrentCategory,
			categories,
			colors
		}}>
			{children}
		</GlobalContext.Provider>
	);
}
