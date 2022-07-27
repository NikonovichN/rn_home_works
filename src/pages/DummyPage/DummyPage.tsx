import React from 'react';

import {FireWork} from '@components';

const DummyPage: React.FC = () => (
  <>
    {Array.from({length: 7}).map((_, index) => (
      <FireWork key={index} delay={index * 200} />
    ))}
  </>
);

export {DummyPage};
