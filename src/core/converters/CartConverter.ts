import {Cart, CartAttributes} from '../entities/Cart';

export class CartConverter {
  static convertToCart = (data: any): Cart => {
    return {
      id: data.data.id,
      type: data.data.id,
      attributes: CartConverter.convertToCartAttributes(data.data.attributes),
    };
  };

  static convertToCartAttributes = (data: any): CartAttributes => {
    return {
      number: data.number,
      item_total: data.item_total,
      total: data.total,
      ship_total: data.ship_total,
      adjustment_total: data.adjustment_total,
      included_tax_total: data.included_tax_total,
      additional_tax_total: data.additional_tax_total,
      display_included_tax_total: data.display_included_tax_total,
      tax_total: data.tax_total,
      currency: data.currency,
      token: data.token,
      display_item_total: data.display_item_total,
      display_ship_total: data.display_ship_total,
      display_adjustment_total: data.display_adjustment_total,
      display_tax_total: data.display_tax_total,
      promo_total: data.promo_total,
      display_promo_total: data.display_promo_total,
      item_count: data.item_count,
      display_total: data.display_total,
      pre_tax_item_amount: data.pre_tax_item_amount,
      display_pre_tax_item_amount: data.display_pre_tax_item_amount,
      pre_tax_total: data.pre_tax_total,
      display_pre_tax_total: data.display_pre_tax_total,
      shipment_state: data.shipment_state,
      payment_state: data.payment_state,
    };
  };
}
