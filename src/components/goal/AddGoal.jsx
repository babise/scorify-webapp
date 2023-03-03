import { useState } from "react";
import { createGoal } from "../../setup/services/goal-services";
//css
import "../../css/Goal.css";

const AddGoal = () => {
	const [goal, setGoal] = useState({
		title: "",
		description: "",
		lundi: false,
		mardi: false,
		mercredi: false,
		jeudi: false,
		vendredi: false,
		samedi: false,
		dimanche: false,
	});

	const addGoal = async (e) => {
		e.preventDefault();
		const response = await createGoal(goal);
		const data = await response;
		console.log(data);
	};

	return (
		<div>
			<h1>Add Goal</h1>
			<form onSubmit={addGoal}>
				<label htmlFor="title">Title</label>
				<input
					type="text"
					name="title"
					id="title"
					value={goal.title}
					onChange={(e) => setGoal({ ...goal, title: e.target.value })}
				/>
				<label htmlFor="description">Description</label>
				<input
					type="text"
					name="description"
					id="description"
					value={goal.description}
					onChange={(e) => setGoal({ ...goal, description: e.target.value })}
				/>
				<label htmlFor="lundi">Lundi</label>
				<input
					type="checkbox"
					name="lundi"
					id="lundi"
					value={goal.lundi}
					onChange={(e) => setGoal({ ...goal, lundi: e.target.checked })}
				/>
				<label htmlFor="mardi">Mardi</label>
				<input
					type="checkbox"
					name="mardi"
					id="mardi"
					value={goal.mardi}
					onChange={(e) => setGoal({ ...goal, mardi: e.target.checked })}
				/>
				<label htmlFor="mercredi">Mercredi</label>
				<input
					type="checkbox"
					name="mercredi"
					id="mercredi"
					value={goal.mercredi}
					onChange={(e) => setGoal({ ...goal, mercredi: e.target.checked })}
				/>
				<label htmlFor="jeudi">Jeudi</label>
				<input
					type="checkbox"
					name="jeudi"
					id="jeudi"
					value={goal.jeudi}
					onChange={(e) => setGoal({ ...goal, jeudi: e.target.checked })}
				/>
				<label htmlFor="vendredi">Vendredi</label>
				<input
					type="checkbox"
					name="vendredi"
					id="vendredi"
					value={goal.vendredi}
					onChange={(e) => setGoal({ ...goal, vendredi: e.target.checked })}
				/>
				<label htmlFor="samedi">Samedi</label>
				<input
					type="checkbox"
					name="samedi"
					id="samedi"
					value={goal.samedi}
					onChange={(e) => setGoal({ ...goal, samedi: e.target.checked })}
				/>
				<label htmlFor="dimanche">Dimanche</label>
				<input
					type="checkbox"
					name="dimanche"
					id="dimanche"
					value={goal.dimanche}
					onChange={(e) => setGoal({ ...goal, dimanche: e.target.checked })}
				/>
				<button type="submit">Add Goal</button>
			</form>
		</div>
	);
};

export default AddGoal;
