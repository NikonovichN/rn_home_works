import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Success: React.FC = (props: any) => {
  return (
    <Svg
      width={67}
      height={67}
      viewBox="0 0 67 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M27.273 39.5l-7.602-8.403-4.171 4.866L27.273 48.5 52.5 21.634 48.33 17.5l-21.057 22z"
        fill="#A5DC86"
      />
      <Path
        d="M33.5.5C15.251.5.5 15.35.5 33.5a33 33 0 1033-33zm0 59.4a26.4 26.4 0 110-52.8 26.4 26.4 0 010 52.8z"
        fill="#A5DC86"
      />
    </Svg>
  );
};

export default Success;
