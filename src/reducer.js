export default (state, action) => {
	switch (action.type) {
		case 'JOINED':
			return {
				...state,
				joined: true,
				roomId: action.payload.roomId,
				userName: action.payload.userName,
			}
		case 'SET_USERS':
			return {
				...state,
				users: action.payload,
			}
		case 'SET_MESSAGES':
			return {
				...state,
				messages: action.payload,
			}
		default:
		case 'NEW_MESSAGE':
			return {
				...state,
				messages: [...state.messages, action.payload],
			}
			return state
	}
}
