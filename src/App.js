import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BarLoader } from "react-spinners";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";

import "./assets/css/general.css";
import "./index.css";
import configureStore from "./store";
import Routing from "./router";
import DataHandler from "./services/DataHandler";
import { Colors } from "./theme";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

const reducers = require("./reducers").default;

// Initialize the desired locales.
export default class App extends React.Component {
  persistor = null;
  state = {
    isLoading: true,
    store: configureStore(reducers, () => {
      this._loadingCompleted();
      this.setState({ isLoading: false });
    }),
  };

  _loadingCompleted = () => {
    DataHandler.setStore(this.state.store);
    // Util.getCsrfToken();
    this.persistor = persistStore(this.state.store);
  };

  render() {
    if (this.state.isLoading) {
      return (
        <div className="loader-wrapper">
          <BarLoader sizeUnit={"px"} size={150} color={Colors.text.primary} />
        </div>
      );
    }

    return (
      <Provider store={this.state.store}>
        <PersistGate
          loading={
            <div className="loader-wrapper">
              <BarLoader
                sizeUnit={"px"}
                size={150}
                color={Colors.text.primary}
              />
            </div>
          }
          persistor={this.persistor}
        >
          <Routing />
        </PersistGate>
      </Provider>
    );
  }
}
