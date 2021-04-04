const reducer = (state, action) => {
	switch (action.type) {
		case 'UPDATE_COLOR':
			return {
				...state,
				colors: {
					...state.colors,
					[action.id]: action.newColor
				}
			}
		case 'RESET_TO_DEFAULTS':
			return {
				...state,
				colors: action.initialState.colors
			}
		case 'UPDATE_MODAL':
			return {
				...state,
				modals: {
					...state.modals,
					[action.id]: action.newValue
				}
			}
		default:
			return state;
	}
}

export default reducer;
