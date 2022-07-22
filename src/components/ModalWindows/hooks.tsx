import React, {useMemo} from 'react';

import {ModalWindowType, UseModalWindowReturnType} from './types';
import {ChooseProperty, NavigateToLogIn, SuccessAddToCart} from './windows';

export const useModalWindow = (
  typeModalWindow: ModalWindowType,
): UseModalWindowReturnType => {
  const ModalWindowComponent = useMemo(() => {
    switch (typeModalWindow) {
      case ModalWindowType.ChooseProperty:
        return ChooseProperty;
      case ModalWindowType.NavigateToLogIn:
        return NavigateToLogIn;
      case ModalWindowType.SuccessAddToCart:
        return SuccessAddToCart;
      default:
        return () => <></>;
    }
  }, [typeModalWindow]);

  return {ModalWindowComponent};
};
