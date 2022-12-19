import {render, screen, fireEvent} from '@testing-library/react-native';
import {SearchBar} from '../SearchBar';

describe('search bar', () => {
  test('press on search bar when has been provided onPress prop should call this function and do not call others', async () => {
    const spyOnPressOnSearch = jest.fn();
    const spyOnChangeText = jest.fn();
    const spyOnTapIcon = jest.fn();

    render(
      <SearchBar
        onPress={spyOnPressOnSearch}
        onChangeText={spyOnChangeText}
        onTapIcon={spyOnTapIcon}
      />,
    );

    const textInput = screen.getByPlaceholderText('Search');
    const icon = screen.getByTestId('tap-icon');

    fireEvent.changeText(textInput);
    fireEvent.press(icon);

    expect(spyOnPressOnSearch).toHaveBeenCalled();
    expect(spyOnChangeText).not.toHaveBeenCalled();
    expect(spyOnTapIcon).not.toHaveBeenCalled();
  });

  test('press on search bar when has NOT been provided onPress prop than other provided function should be callable', async () => {
    const spyOnPressOnSearch = jest.fn();
    const spyOnChangeText = jest.fn();
    const spyOnTapIcon = jest.fn();

    render(
      <SearchBar onChangeText={spyOnChangeText} onTapIcon={spyOnTapIcon} />,
    );

    const textInput = screen.getByPlaceholderText('Search');
    const icon = screen.getByTestId('tap-icon');

    fireEvent.changeText(textInput);
    fireEvent.press(icon);

    expect(spyOnPressOnSearch).not.toHaveBeenCalled();
    expect(spyOnChangeText).toHaveBeenCalled();
    expect(spyOnTapIcon).toHaveBeenCalled();
  });
});
