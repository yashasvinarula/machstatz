import * as types from './types';

export const setPlanets = planets => dispatch => {
    dispatch({
        type: types.SET_PLANETS,
        payload: planets
    });
}

export const addFavourite = planet => dispatch => {
    if(planet.isFavourite===true){
        dispatch({
            type: types.ADD_FAVOURITE,
            payload: planet
        })
    }else{
        dispatch({
            type: types.REMOVE_FAVOURITE,
            payload: planet
        })
    }
}