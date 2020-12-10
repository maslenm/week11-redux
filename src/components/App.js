import Header from "./Header";
import Winner from "./Winner";
import Player1 from "./Score/Player1";
import Player2 from "./Score/Player2";
import ResetButton from "./ResetButton";

const App = () => (
	<>
		<Header />
		{/* className on div here keeps Score rendered ui in row */}
		<div className="row mb-4">
			<Player1 />
			<Player2 />
		</div>
		<Winner />
		<hr />
		<ResetButton />
	</>
);

export default App;
