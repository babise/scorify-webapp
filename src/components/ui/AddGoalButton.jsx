import { Link } from "react-router-dom";

const AddGoalButton = () => {
	return (
		<button className="add-goal-button">
			<Link to="/add-goal">+</Link>
		</button>
	);
};

export default AddGoalButton;
