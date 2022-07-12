import {AddToCart} from './cart/addToCartTypes';
import {GetCart} from './cart/getCartTypes';
import {GetProductAction} from './productDetailsTypes';
import {GetProductsAction} from './productListTypes';
import {UserLogin} from './userTypes';

export type AnyActionTypes =
  | AddToCart
  | GetCart
  | GetProductAction
  | GetProductsAction
  | UserLogin;
