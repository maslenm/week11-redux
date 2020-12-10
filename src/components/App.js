import Header from "./Header";
import ResetButton from "./ResetButton";
import Winner from "./Winner";
import Player1 from "./Score/Player1";
import Player2 from "./Score/Player2";

const App = ({ onIncrementplayer1, onIncrementplayer2, onReset }) => (
	<>
		<Header />
		{/* className on div here keeps Score rendered ui in row */}
		<div className="row mb-4">
			{" "}
			{/* passing props into <Score /> */}
			<Player1 handleClickPlayerScore={onIncrementplayer1} />
			<Player2 handleClickPlayerScore={onIncrementplayer2} />
		</div>
		<Winner />
		<hr />
		<ResetButton handleReset={onReset} />
	</>
);

export default App;
