import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const HeartIcon: React.FC = (props: any) => (
  <Svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M20.51 6.84c-.577-1.175-2.368-2.293-4.579-1.654l-.002.001a4.86 4.86 0 0 0-2.616 1.841L12.5 8.165l-.813-1.137a4.86 4.86 0 0 0-2.615-1.84c-2.223-.632-4.007.48-4.582 1.652-.894 1.815-.615 3.961 1.286 6.546L20.51 6.841Zm0 0c.894 1.816.615 3.962-1.28 6.548l-.003.002m1.283-6.55-1.283 6.55m0 0c-1.473 2.023-3.598 4.075-6.724 6.504m6.724-6.504-6.724 6.504m0 0c-3.128-2.432-5.25-4.502-6.727-6.508l6.727 6.508Z"
      stroke="#fff"
      strokeWidth={2}
    />
  </Svg>
);

export default HeartIcon;
