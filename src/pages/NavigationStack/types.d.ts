import {ReactNode} from 'react';

export type RootStackParamList = {
  MainScreen: undefined;
  ProductDetails: {productId: string};
  DummyPage: undefined;
  LogIn: undefined;
  ModalWindow: {
    icon: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    actions: ReactNode;
  };
};
