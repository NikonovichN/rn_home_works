import {Dispatch, SetStateAction, useState} from 'react';

import {ModalWindowState, ModalWindowType} from '@components';

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
