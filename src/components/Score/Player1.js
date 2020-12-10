import { connect } from "react-redux";
import Score from "./Score";
import { p1Scores } from "../../data/actions";

const mapStateToProps = (state) => {
	return {
		server: state.p1Serving,
		player: "Player1",
		currentScore: state.player1,
		disabled: state.winner > 0,
	};
};

const mapDispatchToProps = (dispatch) => ({
	handleScore: () => dispatch(p1Scores()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Score);
