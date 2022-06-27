import {AppState} from '../reducers/rootReducer';

const isLoggedSelector = (state: AppState): boolean => state.profile.isLogged;

export {isLoggedSelector};
