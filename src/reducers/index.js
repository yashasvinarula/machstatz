import * as types from '../actions/types';
import {planets} from '../data/planets';

const initialState = {
    planets: planets,
    favourites: []
}

let temp = [];

export default (state = initialState, action) => {
    switch (action.type) {
      case types.SET_PLANETS:
        return {...state, planets: action.payload};
      case types.ADD_FAVOURITE: 
        temp = [];
        state.planets.forEach(p => {
          if(p.id === action.payload.id) temp.push(action.payload);
          else temp.push(p);
        })
        return {
          planets: temp, 
          favourites: [...state.favourites, action.payload]
        }
      case types.REMOVE_FAVOURITE:
        temp = [];
        state.planets.forEach(p => {
          if(p.id === action.payload.id) temp.push(action.payload);
          else temp.push(p);
        })
        return {
          planets: temp,
          favourites: state.favourites.filter(p => p.id !== action.payload.id)
        }
      default:
        return state;
    }
  };
