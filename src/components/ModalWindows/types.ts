import React from 'react';
import {ModalProps} from './windows';

export enum ModalWindowType {
  undefined,
  'ChooseProperty',
  'NavigateToLogIn',
  'SuccessAddToCart',
}

export type UseModalWindowReturnType = {
  ModalWindowComponent: React.FC<ModalProps>;
};

export type ModalWindowState = {
  isVisible: boolean;
  typeModal: ModalWindowType;
};

export type ModalWindowProps = ModalWindowState & ModalProps;
