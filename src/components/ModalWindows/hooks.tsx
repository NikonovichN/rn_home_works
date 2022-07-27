import React, {Dispatch, SetStateAction, useMemo, useState} from 'react';

import {
  ModalWindowType,
  UseModalWindowReturnType,
  ModalWindowState,
} from './types';
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

export const defaultModalWindowState: ModalWindowState = {
  isVisible: false,
  typeModal: ModalWindowType.undefined,
};

export const useModalWindowState = (): [
  ModalWindowState,
  Dispatch<SetStateAction<ModalWindowState>>,
] => {
  const [modalWindowState, setModalWindowState] = useState<ModalWindowState>(
    defaultModalWindowState,
  );

  return [modalWindowState, setModalWindowState];
};
