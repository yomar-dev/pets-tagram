import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from 'serviceWorker';

import 'styles/styles.scss';
import { AppRouter } from 'routes/AppRouter';

ReactDOM.render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
