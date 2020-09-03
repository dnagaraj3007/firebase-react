import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./config/theme";
import { Provider } from "react-redux";

import AppRouter from "./common/routes/routes";
import store from "./state/store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import rrfProps from "./config/rrfConfig";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Provider store={store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
            <AppRouter/>
          </ReactReduxFirebaseProvider>
        </Provider>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
