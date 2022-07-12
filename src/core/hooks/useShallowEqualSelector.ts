import {useSelector, shallowEqual} from 'react-redux';

import {AppState} from '../reducers/rootReducer';

export function useShallowEqualSelector<State = AppState, Selected = unknown>(
  selector: (state: State) => Selected,
) {
  return useSelector(selector, shallowEqual);
}
