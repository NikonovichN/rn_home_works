import React from 'react';

import {HeaderProps} from './headerTypes';

type Params = {
  Component: React.FC<any>;
};

const headerWrapper: React.FC<Params & HeaderProps> = props => (
  <props.Component navigation={props.navigation} title={props.title} />
);

export {headerWrapper};
