import * as actions from './submodule-two.actions';

export class SubmoduleTwoState {
	items: any[];
}

export const State: SubmoduleTwoState = {
	items: []
};

export function reducer(state: SubmoduleTwoState = State, action: actions.Actions) {

	switch (action.type) {
		case actions.SET_SUBMODULE_2222222_ITEMS:
			return Object.assign({}, state,
				{
					items: [{ id: 2222 }, { id: 2223 }]
				})

		default:
			return state;
	}
}

export const getSubmoduleTwo = (state: SubmoduleTwoState) => state;
