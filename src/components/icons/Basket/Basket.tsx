import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import iconWrapper from '../iconWrapper/iconWrapper';

const BasketIcon = (props: any) => (
  <Svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M8.698 18.325c-1.044 0-1.89.855-1.89 1.9s.846 1.9 1.89 1.9c1.045 0 1.9-.855 1.9-1.9s-.855-1.9-1.9-1.9ZM3 4.075c0 .522.427.95.95.95h.95l3.419 7.21-1.283 2.319c-.693 1.272.219 2.821 1.662 2.821h10.448c.522 0 .95-.427.95-.95a.953.953 0 0 0-.95-.95H8.698l1.045-1.9h7.076c.712 0 1.339-.39 1.662-.978l3.4-6.166a.947.947 0 0 0-.826-1.406H6.998l-.636-1.359a.943.943 0 0 0-.855-.541H3.95a.953.953 0 0 0-.95.95Zm15.196 14.25c-1.045 0-1.89.855-1.89 1.9s.845 1.9 1.89 1.9c1.044 0 1.9-.855 1.9-1.9s-.855-1.9-1.9-1.9Z"
      fill="#fff"
    />
  </Svg>
);

export default iconWrapper(BasketIcon);
