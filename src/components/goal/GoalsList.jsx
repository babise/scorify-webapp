import { useEffect, useState } from "react";
import { getAllGoals } from "../../setup/services/goal-services";
import GoalTicket from "./GoalTicket";

const GoalsList = () => {
	const [goals, setGoals] = useState([]);

	useEffect(() => {
		const fetchGoals = async () => {
			const response = await getAllGoals();
			const data = await response;
			setGoals(data);
		};
		fetchGoals();
	}, []);

	console.log(goals);

	return (
		<div className="goals-list">
			{goals.map((goal) => (
				<div key={goal.id}>
					<GoalTicket goal={goal} />
				</div>
			))}
		</div>
	);
};

export default GoalsList;
