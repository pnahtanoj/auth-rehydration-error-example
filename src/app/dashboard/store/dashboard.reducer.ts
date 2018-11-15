import * as actions from './dashboard.actions';

export class DashboardState {
	items: any[]
}

export const State: DashboardState = {
	items: []
};

export function reducer(state: DashboardState = State, action: actions.Actions) {
	switch (action.type) {
		case actions.SET_DASHBOARD_ITEMS:
			return Object.assign({}, state,
				{
					items: [{ id: 1 }, { id: 2 }]
				})

		default:
			return state;
	}
}

export const getDashboard = (state: DashboardState) => state;
