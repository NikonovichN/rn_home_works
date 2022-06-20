import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ArrowBack: React.FC = (props: any) => {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.932 3L13.4 4.457l-6.46 6.509H21v2.068H6.94l6.46 6.51L11.932 21 3 12l8.932-9z"
        fill="#fff"
      />
    </Svg>
  );
};

export default ArrowBack;
