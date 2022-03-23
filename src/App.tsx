import React, { FC } from 'react';
import '@openfonts/roboto_cyrillic';
import 'core-js';
import 'regenerator-runtime/runtime';

import { Feature } from './Feature';
import { GlobalStyle } from './globalStyles';

export const App: FC = () => (
  <>
    <GlobalStyle />
    <Feature />
  </>
);
