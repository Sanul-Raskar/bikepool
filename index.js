/** @format */

import { AppRegistry } from "react-native";
import route from "./src/components/Router/route";
import home from "./src/components/Home/home";
import { name as appName } from "./app.json";
AppRegistry.registerComponent(appName, () => route);

/*import App from './App';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => App);*/
