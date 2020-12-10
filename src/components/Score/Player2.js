import { connect } from "react-redux";
import Score from "./Score";

const mapStateToProps = (state) => {
	return {
		server: !state.p1Serving,
		player: "Player2",
		currentScore: state.player2,
		disabled: state.winner > 0,
	};
};

export default connect(mapStateToProps)(Score);