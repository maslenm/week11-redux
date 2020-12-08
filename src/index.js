import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";

const initial = {
	player1: 0,
	player2: 0,
	p1Serving: true,
	winner: 0,
};

const player1Scores = (state) => {
	return {
		...state,
		player1: state.player1 + 1,
	};
};

const player2Scores = (state) => {
	return {
		...state,
		player2: state.player2 + 1,
	};
};

const server = (state) => {
	return {
		...state,
		p1Serving:
			(state.player1 + state.player2) % 5 === 0
				? !state.p1Serving
				: state.p1Serving,
	};
};

const won = (state) => {
	let winner = 0;

	if (state.player1 > 20) {
		winner = 1;
	} else if (state.player2 > 20) {
		winner = 2;
	}

	return {
		...state,
		winner: winner,
	};
};

let reducer = (state, action) => {
	switch (action.type) {
		case "PLAYER_1_SCORES":
			return won(server(player1Scores(state)));
		case "PLAYER_2_SCORES":
			return won(server(player2Scores(state)));
		case "RESET":
			return initial;
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

const render = () => {
	let state = store.getState();

	ReactDOM.render(
		<React.StrictMode>
			<App
				won={state.winner}
				p1Serving={state.p1Serving}
				player1Score={state.player1}
				player2Score={state.player2}
				onIncrementplayer1={() => store.dispatch({ type: "PLAYER_1_SCORES" })}
				onIncrementplayer2={() => store.dispatch({ type: "PLAYER_2_SCORES" })}
				onReset={() => store.dispatch({ type: "RESET" })}
			/>
		</React.StrictMode>,
		document.getElementById("root")
	);
};

store.subscribe(render); // render when state changes
render(); // render when page loads using initial state

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
