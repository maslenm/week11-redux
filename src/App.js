import Header from "./components/Header";
import ResetButton from "./components/ResetButton";
import Score from "./components/Score";
import Winner from "./components/Winner";

const App = ({
	won,
	p1Serving,
	player1Score,
	player2Score,
	onIncrementplayer1,
	onIncrementplayer2,
	onReset,
}) => (
	<>
		<Header />
		{/* className on div here keeps Score rendered ui in row */}
		<div className="row mb-4">
			{" "}
			{/* passing props into <Score /> */}
			<Score
				player={"Player1"}
				handleClickPlayerScore={onIncrementplayer1}
				currentScore={player1Score}
				server={p1Serving}
			/>
			<Score
				player={"Player2"}
				handleClickPlayerScore={onIncrementplayer2}
				currentScore={player2Score}
				server={!p1Serving}
			/>
		</div>
		<Winner winner={won} />
		<hr />
		<ResetButton handleReset={onReset} />
	</>
);

export default App;
