import {ReactNode} from 'react';

export type RootStackParamList = {
  MainScreen: undefined;
  ProductDetails: {productId: string};
  DummyPage: undefined;
  ModalWindow: {
    title: ReactNode;
    description?: ReactNode;
    actions: ReactNode;
  };
};
