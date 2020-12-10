import { connect } from "react-redux";
import ResetButton from "./ResetButton";
import { reset } from "../../data/actions";

const mapStateToProps = (state) => {
	return {
		disabled: state.winner > 0,
	};
};

const mapDispatchToProps = (dispatch) => ({
	handleReset: () => dispatch(reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetButton);
