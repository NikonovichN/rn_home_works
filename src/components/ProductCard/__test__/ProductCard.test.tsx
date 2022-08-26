import {render, screen, fireEvent} from '@testing-library/react-native';

import {Product} from '@entities';
import {ProductCard} from '../ProductCard';

describe('Product card', () => {
  const mockProduct: Product = {
    id: 10,
    name: 'T-shirt',
    imageUrl: 'https://linkto.link',
    displayPrice: '$328',
    wasPrice: '$20000',
    discount: '$1400',
    description: 'Some text',
    properties: [{id: 12, type: 'product'}],
  };

  test('test component', async () => {
    const onPressCard = jest.fn();

    render(<ProductCard onPress={onPressCard} product={mockProduct} />);

    const findName = await screen.findByText(mockProduct.name);
    const findPrice = await screen.findByText(mockProduct.displayPrice);

    fireEvent.press(screen.getByTestId('test-card'));

    expect(findName).toBeDefined();
    expect(findPrice).toBeDefined();
    expect(onPressCard).toHaveBeenCalled();
  });
});
