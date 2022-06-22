import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BigBox: React.FC = (props: any) => {
  return (
    <Svg
      width={130}
      height={150}
      viewBox="0 0 130 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M64.655 0L130 37.533v74.779L64.655 74.778V0z" fill="#D2714E" />
      <Path d="M0 37.534L64.976.144v74.779L0 112.312V37.534z" fill="#A45848" />
      <Path
        d="M97.657 56.146l-64.975-37.39L65.024.042 130 37.431 97.657 56.145zM.049 37.56l64.976 37.633v74.806L.049 112.339V37.56z"
        fill="#F39649"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M59.287 118.099l-18.049-10.386v20.772l18.05 10.386v-20.772zm-5.676 3.266l-6.696-3.853v7.706l6.696 3.853v-7.706z"
        fill="#fff"
      />
      <Path
        d="M5.002 89.047l15.005 8.932v5.4L5.002 94.448v-5.401zM5.002 97.772l7.711 4.569v3.947l-7.711-4.57v-3.947z"
        fill="#A45848"
      />
      <Path
        d="M65.024 75.194L130 37.534v74.778l-64.976 37.66V75.193z"
        fill="#D2714E"
      />
      <Path
        d="M64.83 75.206L.05 37.617l32.635-18.861L97.66 56.145 64.83 75.206z"
        fill="#FEB96B"
      />
    </Svg>
  );
};

export default BigBox;
