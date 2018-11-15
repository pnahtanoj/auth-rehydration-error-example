import * as actions from './submodule-one.actions';

export class SubmoduleOneState {
	items: any[];
}

export const State: SubmoduleOneState = {
	items: []
};

export function reducer(state: SubmoduleOneState = State, action: actions.Actions) {

	switch (action.type) {
		case actions.SET_SUBMODULE_1111111_ITEMS:
			return Object.assign({}, state,
				{
					items: [{ id: 1111 }, { id: 1112 }]
				})

		default:
			return state;
	}
}

export const getSubmoduleOne = (state: SubmoduleOneState) => state;
