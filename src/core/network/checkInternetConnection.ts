import {NetworkInfo} from './NetworkInfo';

type Params = {
  action(): void;
  failCallback(): void;
};

function checkInternetConnection(params: Params) {
  if (NetworkInfo.hasInternetConnection) {
    params.action();
  } else {
    params.failCallback();
  }
}

export {checkInternetConnection};
