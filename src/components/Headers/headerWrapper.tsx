import React, {ReactComponentElement, ReactNode} from 'react';

import {HeaderProps} from './headerTypes';

interface Params {
  Component: React.FC<any>;
}

const headerWrapper: React.FC<Params & HeaderProps> = props => (
  <props.Component navigation={props.navigation} title={props.title} />
);

export default headerWrapper;
