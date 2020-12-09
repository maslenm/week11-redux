import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./data/store";

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
