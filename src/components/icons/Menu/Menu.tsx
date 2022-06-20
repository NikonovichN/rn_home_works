import React from 'react';
import Svg, {Path} from 'react-native-svg';

const MenuIcon: React.FC = (props: any) => (
  <Svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M4 6h17v2.167H4V6Zm0 5.417h17v2.166H4v-2.166Zm0 5.416h17V19H4v-2.167Z"
      fill="#fff"
    />
  </Svg>
);

export default MenuIcon;
