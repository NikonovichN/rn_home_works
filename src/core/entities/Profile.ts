export interface ProfileUpdate {
  email: string;
  first_name: string;
  last_name: string;
  bill_address_id: string;
}

export interface Profile {
  id: string;
  type: string;
  attributes: {
    email: string;
    first_name: string;
    last_name: string;
    store_credits: number;
    completed_orders: number;
    public_metadata: {
      user_segment: string;
    };
  };
  relationships: {
    default_billing_address: {
      data: {
        id: string;
        type: string;
      };
    };
    default_shipping_address: {
      data: {
        id: string;
        type: string;
      };
    };
  };
}
