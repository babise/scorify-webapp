import { useState } from "react";
import { createGoalValidation } from "../../setup/services/goalValidation-services";
//css
import "../../css/Goal.css";

const GoalTicket = ({ goal }) => {
	const validation = useState({
		goals: {
			id: goal.id,
		},
	});

	const addValidation = async (e) => {
		e.preventDefault();
		const response = await createGoalValidation(validation);
		const data = await response;
		console.log(data);
	};

	return (
		<div className="goalTicketContainer">
			<div>
				<h1>{goal.title}</h1>
				<p>{goal.description}</p>
			</div>
			<div>
				<button className="addValidation" onClick={addValidation}>
					<p>+</p>
				</button>
			</div>
		</div>
	);
};

export default GoalTicket;
