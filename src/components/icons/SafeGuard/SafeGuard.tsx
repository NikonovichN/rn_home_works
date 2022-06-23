import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SafeGuard: React.FC = (props: any) => {
  return (
    <Svg
      width={22}
      height={23}
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10.41 22.864a1.2 1.2 0 001.113-.002c9.323-5.005 9.985-14.785 9.977-17.565a1.148 1.148 0 00-.694-1.05L11.44.099a1.17 1.17 0 00-.946.001L1.19 4.248A1.152 1.152 0 00.5 5.285c-.039 2.767.519 12.567 9.908 17.579zM7.134 9.534l2.668 2.667 4.995-4.992 1.646 1.644-6.641 6.637-4.314-4.31 1.646-1.645z"
        fill="#A5DC86"
      />
    </Svg>
  );
};

export default SafeGuard;
