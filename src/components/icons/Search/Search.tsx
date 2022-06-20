import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SearchIcon: React.FC = (props: any) => (
  <Svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10.314 4a6.315 6.315 0 0 1 6.315 6.314 6.33 6.33 0 0 1-1.516 4.11l.262.262h.768L21 19.543 19.543 21l-4.857-4.857v-.768l-.263-.262a6.33 6.33 0 0 1-4.109 1.516 6.315 6.315 0 0 1 0-12.629Zm0 1.943a4.353 4.353 0 0 0-4.371 4.371 4.353 4.353 0 0 0 4.371 4.372 4.353 4.353 0 0 0 4.372-4.372 4.353 4.353 0 0 0-4.372-4.371Z"
      fill="#8F8F8F"
    />
  </Svg>
);

export default SearchIcon;
