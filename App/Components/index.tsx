import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import Application from './Application'

const App = () => (
  <MuiThemeProvider>
    <Application/>
  </MuiThemeProvider>
);

injectTapEventPlugin();
ReactDOM.render(
  <App />,
  document.getElementById('app')
);