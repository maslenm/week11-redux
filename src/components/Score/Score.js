const Score = ({
	server,
	player,
	currentScore,
	handleClickPlayerScore,
	disabled,
}) => (
	<>
		<div className="col-md-6 mt-4">
			<div className={`card text-center ${server ? "bg-dark text-white" : ""}`}>
				<h5 className="card-header">{player}</h5>
				<div className="card-body">
					<p className="card-text display-1">{currentScore}</p>
				</div>
				<div className="card-footer">
					<button
						className="form-control btn btn-success"
						onClick={handleClickPlayerScore}
						disabled={disabled}
					>
						+
					</button>
				</div>
			</div>
		</div>
	</>
);

export default Score;
