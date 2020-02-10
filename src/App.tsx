import * as React from 'react';
import '@openfonts/roboto_cyrillic';
import 'core-js';
import 'regenerator-runtime/runtime';

import Feature from './Feature';
import { GlobalStyle } from './globalStyles';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Feature />
    </>
  );
}
