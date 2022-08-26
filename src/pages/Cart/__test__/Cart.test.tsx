import {render, screen, fireEvent} from '@testing-library/react-native';
import {useNavigation} from '@react-navigation/native';

import {useShallowEqualSelector} from '@hooks';

import {Cart} from '../Cart';
import {Routes} from '../../../core/constants/routes';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(() => ({
    navigate: jest.fn(),
  })),
}));

jest.mock('../../../core/hooks', () => ({
  ...jest.requireActual('../../../core/hooks'),
  useShallowEqualSelector: jest.fn(() => ({
    data: {},
    isLogged: false,
  })),
}));

beforeEach(() => jest.clearAllMocks());

describe('Cart screen', () => {
  const mockNavigate = jest.fn();

  test('if user is not logged in we should show navigate to login component', async () => {
    (useNavigation as jest.Mock).mockReturnValue({
      navigate: mockNavigate,
    });

    const firstLoginTitle = 'First Login';
    const firstLoginSubtitle = 'Login first to view your cart';
    const firstLoginButtonContent = 'LogIn now';

    render(<Cart />);

    const findFirstLoginTitle = await screen.findByText(firstLoginTitle);
    const findFirstLoginSubtitle = await screen.findByText(firstLoginSubtitle);
    const findFirstLoginButtonContent = await screen.findByText(
      firstLoginButtonContent.toUpperCase(),
    );

    fireEvent.press(screen.getByTestId('test-primary-button'));

    expect(findFirstLoginTitle).toBeDefined();
    expect(findFirstLoginSubtitle).toBeDefined();
    expect(findFirstLoginButtonContent).toBeDefined();
    expect(mockNavigate).toHaveBeenCalledWith(Routes.LogIn);
  });

  test('if user is logged in but cart is empty', async () => {
    (useNavigation as jest.Mock).mockReturnValue({
      navigate: mockNavigate,
    });
    (useShallowEqualSelector as jest.Mock).mockReturnValue({
      data: null,
      isLogged: true,
    });

    const emptyCartTitle = 'Your Cart is Empty!';
    const emptyCartSubtitle = 'Add product in your cart now';
    const emptyCartButtonContent = 'shop now';

    render(<Cart />);

    const findEmptyCartTitle = await screen.findByText(emptyCartTitle);
    const findEmptyCartSubtitle = await screen.findByText(emptyCartSubtitle);
    const findEmptyCartButtonContent = await screen.findByText(
      emptyCartButtonContent.toUpperCase(),
    );

    fireEvent.press(screen.getByTestId('test-primary-button'));

    expect(findEmptyCartTitle).toBeDefined();
    expect(findEmptyCartSubtitle).toBeDefined();
    expect(findEmptyCartButtonContent).toBeDefined();
    expect(mockNavigate).toHaveBeenCalledWith(Routes.MainScreen);
  });

  test('if user is logged in and cart is not empty', async () => {
    const mockCartData = {
      item_count: 3,
      display_item_total: 100,
      display_ship_total: 10,
      display_promo_total: 20,
      display_tax_total: 14,
    };
    (useShallowEqualSelector as jest.Mock).mockReturnValue({
      data: {attributes: mockCartData},
      isLogged: true,
    });

    const cartTitle = 'Price details';
    const priceItems = 'Price (3) items';
    const secureText = 'Safe and Secure Payments 100% Authentic Products';
    const deliveryText = 'Delivery';
    const discountText = 'Discount';
    const amountPayable = 'Amount Payable';
    const contentButton = 'proceed to payment';

    render(<Cart />);

    const findCartTitle = await screen.findByText(cartTitle);
    const findPriceItems = await screen.findByText(priceItems);
    const findSecureText = await screen.findByText(secureText);
    const findDeliveryText = await screen.findByText(deliveryText);
    const findDiscountText = await screen.findByText(discountText);
    const findAmountPayable = await screen.findByText(amountPayable);
    const findContentButton = await screen.findByText(
      contentButton.toUpperCase(),
    );
    const findItemTotal = await screen.findByText(
      mockCartData.display_item_total.toString(),
    );
    const findShipTotal = await screen.findByText(
      mockCartData.display_ship_total.toString(),
    );
    const findPromoTotal = await screen.findByText(
      mockCartData.display_promo_total.toString(),
    );
    const findTaxTotal = await screen.findByText(
      mockCartData.display_tax_total.toString(),
    );

    expect(findCartTitle).toBeDefined();
    expect(findPriceItems).toBeDefined();
    expect(findSecureText).toBeDefined();
    expect(findDeliveryText).toBeDefined();
    expect(findDiscountText).toBeDefined();
    expect(findAmountPayable).toBeDefined();
    expect(findContentButton).toBeDefined();
    expect(findItemTotal).toBeDefined();
    expect(findShipTotal).toBeDefined();
    expect(findPromoTotal).toBeDefined();
    expect(findTaxTotal).toBeDefined();
  });
});
