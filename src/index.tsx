import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/materialize-css-override.scss";
import "./assets/css/theme.scss";
import "./assets/css/index.scss";
import "../node_modules/animate.css/animate.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
