import {render, screen, fireEvent} from '@testing-library/react-native';
import {PrimaryButton} from '../PrimaryButton';

describe('Primary button', () => {
  test('test button', async () => {
    const onPressButton = jest.fn();
    const contentButton = 'Press me';

    render(<PrimaryButton onPress={onPressButton} content={contentButton} />);

    const findContent = await screen.findByText(contentButton.toUpperCase());

    fireEvent.press(screen.getByTestId('test-primary-button'));

    expect(findContent).toBeDefined();
    expect(onPressButton).toHaveBeenCalled();
  });
});
