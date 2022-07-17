import {
  HEX_BASE_NUMBER,
  HEX_COLOR_LENGTH,
  TOTAL_POSSIBLE_COLOR_COMBINATIONS,
} from '@constants';

export const generateRandomColor = () => {
  const randomColor = Math.floor(
    Math.random() * TOTAL_POSSIBLE_COLOR_COMBINATIONS,
  )
    .toString(HEX_BASE_NUMBER)
    .padStart(HEX_COLOR_LENGTH, '0');

  return `#${randomColor}`;
};
