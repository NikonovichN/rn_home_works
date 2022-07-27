import {NetworkInfo} from './NetworkInfo';

function checkInternetConnection(action: () => void, failCallback: () => void) {
  if (NetworkInfo.hasInternetConnection) {
    action();
  } else {
    failCallback();
  }
}

export {checkInternetConnection};
