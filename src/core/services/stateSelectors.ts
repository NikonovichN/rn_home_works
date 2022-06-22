import {AppState} from '../reducers/rootReducer';

const isLogged = (state: AppState): boolean => state.profile.isLogged;

export default {isLogged};
