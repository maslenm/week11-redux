import initial from "./initial";

//reducer functions

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
	}
	if (state.player2 > 20) {
		winner = 2;
	}

	return {
		...state,
		winner: winner,
	};
};

//main reducer

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

export default reducer;
