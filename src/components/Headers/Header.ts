import React from 'react';

import {CartHeader} from './CartHeader';
import {MainHeader} from './MainHeader';
import {PageHeader} from './PageHeader';
import {ProductHeader} from './ProductHeader';
import {HeaderProps} from './headerTypes';

export class Header {
  static Main: React.FC<HeaderProps> = MainHeader;
  static Page: React.FC<HeaderProps> = PageHeader;
  static Product: React.FC<HeaderProps> = ProductHeader;
  static Cart: React.FC<HeaderProps> = CartHeader;
}
