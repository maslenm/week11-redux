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
		{/* header */}
		<header className="jumbotron mt-4 mb-0">
			<h1>PongPing</h1>
		</header>

		{/* scores */}
		<div className="row mb-4">
			<div className="col-md-6 mt-4">
				<div
					className={`card text-center ${
						p1Serving ? "bg-dark text-white" : ""
					}`}
				>
					<h5 className="card-header">Player 1</h5>
					<div className="card-body">
						<p className="card-text display-1">{player1Score}</p>
					</div>
					<div className="card-footer">
						<button
							className="form-control btn btn-success"
							onClick={onIncrementplayer1}
						>
							+
						</button>
					</div>
				</div>
			</div>

			<div className="col-md-6 mt-4">
				<div
					className={`card text-center ${
						p1Serving ? "" : "bg-dark text-white"
					}`}
				>
					<h5 className="card-header">Player 2</h5>
					<div className="card-body">
						<p className="card-text display-1">{player2Score}</p>
					</div>
					<div className="card-footer">
						<button
							className="form-control btn btn-success"
							onClick={onIncrementplayer2}
						>
							+
						</button>
					</div>
				</div>
			</div>
		</div>

		{/* winner message */}
		{won ? (
			<h2 className="alert alert-success">{`Player ${won} wins!`}</h2>
		) : null}

		<hr />

		{/* reset button */}
		<button className="btn btn-danger" onClick={onReset}>
			Reset
		</button>
	</>
);

export default App;
