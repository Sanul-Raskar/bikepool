import { AppRegistry } from "react-native";
import Route from "./src/components/Router/route";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer/rootReducer";
import thunk from "redux-thunk";
import React from "react";

const store = createStore(rootReducer, applyMiddleware(thunk));
const AppContainer = () => (
  <Provider store={store}>
    <Route />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppContainer);
