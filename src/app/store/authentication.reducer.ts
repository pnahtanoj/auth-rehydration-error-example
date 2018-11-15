import * as actions from './authentication.actions';

export class AuthenticationState {
	token: string; // used?
	bearerToken: string;
	refreshToken: string;
	bearerExpiration: number;
}

export const State: AuthenticationState = {
	token: '',
	bearerToken: '',
	refreshToken: '',
	bearerExpiration: 0
};

export function reducer(state: AuthenticationState = State, action: actions.Actions) {
	console.log('ACTION: ', action.type);

	switch (action.type) {
		case actions.AUTHENTICATION_SUCCESS:
			const curDate = Date.now() / 1000;
			const data = action.payload.data;
			// const expiration = 5 + curDate;
			const expiration = parseInt(data.expires_in) + curDate;

			return Object.assign({}, state,
				{
					bearerToken: data.access_token,
					refreshToken: data.refresh_token,
					bearerExpiration: expiration
				})

		case actions.AUTHENTICATION_CLEAR:
			return Object.assign({}, state, {
				token: State.token,
				bearerToken: State.bearerToken,
				refreshToken: State.refreshToken,
				bearerExpiration: State.bearerExpiration
			})
		default:
			return state;
	}
}

export const getAuthentication = (state: AuthenticationState) => state;
