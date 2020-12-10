import { connect } from "react-redux";
import Score from "./Score";

const mapStateToProps = (state) => {
	return {
		server: state.p1Serving,
		player: "Player1",
		currentScore: state.player1,
		disabled: state.winner > 0,
	};
};

const mapDispatchToProps = (dispatch) => ({
	handleScore: () => dispatch({ type: "PLAYER_1_SCORES" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Score);
