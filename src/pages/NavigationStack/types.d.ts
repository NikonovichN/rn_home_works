import {ReactNode} from 'react';
import {AnyActionTypes} from '../../core/actions/AnyActionTypes';

export type RootStackParamList = {
  MainScreen: undefined;
  ProductDetails: {productId: string};
  DummyPage: undefined;
  LogIn: {
    action?: AnyActionTypes;
  };
  ModalWindow: {
    icon: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    actions: ReactNode;
  };
};
