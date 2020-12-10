import { connect } from "react-redux";
import Score from "./Score";
import { p2Scores } from "../../data/actions";

const mapStateToProps = (state) => {
	return {
		server: !state.p1Serving,
		player: "Player2",
		currentScore: state.player2,
		disabled: state.winner > 0,
	};
};

const mapDispatchToProps = (dispatch) => ({
	handleScore: () => dispatch(p2Scores()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Score);
