import React, { FC } from "react";

import Routes from './routes';
import GlobalStyle from './globalStyles';

const App: FC = () => (
  <>
    <GlobalStyle />
    <Routes />
  </>
);

export default App;