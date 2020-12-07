import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";

const initial = {
	player1: 0,
	player2: 0,
};

let reducer = (state, action) => {
	switch (action.type) {
		case "INCREMENT PLAYER1":
			return {
				...state,
				player1: state.player1 + 1,
			};
		case "INCREMENT PLAYER2":
			return {
				...state,
				player1: state.player2 + 1,
			};
		default:
			return state;
	}
};

const store = createStore(
	reducer,
	initial,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// subscribe to any changes
store.subscribe(() => {
	// get the current state using the getState method // we can get the state, but not update it
	let state = store.getState();
	// for now, just log the new count
	console.log(state);
});

ReactDOM.render(
	<React.StrictMode>
		<App player1Score={initial.player1} player2Score={initial.player2} />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
