import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
	switch (action.type){
		case FETCH_WEATHER: 
			// state.push(action.payload.data) is bad practice
			// dont manipulate state directly
			// return new instance of state: e.g. state.concat or the below for es6 syntax
			return [ action.payload.data, ...state ]; 
	}

	return state;
}