import {AddToCart} from './cart/addToCartTypes';
import {CreateCart} from './cart/createCartTypes';
import {DeleteCart} from './cart/deleteCartTypes';
import {GetCart} from './cart/getCartTypes';
import {GetProductAction} from './productDetailsTypes';
import {GetProductsAction} from './productListTypes';
import {UserLogin} from './userTypes';

export type AnyActionTypes =
  | AddToCart
  | CreateCart
  | DeleteCart
  | GetCart
  | GetProductAction
  | GetProductsAction
  | UserLogin;
