import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import store from './state/store';
import { Provider } from 'react-redux';
import TalentCalculator from './components/TalentCalculator';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TalentCalculator />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
