import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Decline: React.FC = (props: any) => {
  return (
    <Svg
      width={67}
      height={67}
      viewBox="0 0 67 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M33.5.5C15.251.5.5 15.35.5 33.5a33 33 0 1033-33zm0 59.4a26.4 26.4 0 110-52.8 26.4 26.4 0 010 52.8z"
        fill="#DD6B55"
      />
      <Path
        d="M50.5 20.64l-4.149-4.14-12.839 12.814L20.673 16.5 16.5 20.64l12.839 12.814L16.5 46.294l4.149 4.14 12.839-12.839 12.839 12.816L50.5 46.27 37.661 33.454 50.5 20.641z"
        fill="#DD6B55"
      />
    </Svg>
  );
};

export default Decline;
