import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Warning: React.FC = (props: any) => {
  return (
    <Svg
      width={65}
      height={65}
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M29.25 42.25h6.5v6.5h-6.5v-6.5zm0-26h6.5v19.5h-6.5v-19.5zM32.5 0C14.527 0 0 14.625 0 32.5A32.5 32.5 0 1032.5 0zm0 58.5a26 26 0 110-52 26 26 0 010 52z"
        fill="#FEB96B"
      />
    </Svg>
  );
};

export default Warning;
