import axios from "axios";

const REACT_APP_API = "http://localhost:8000/api";

const createGoalValidation = async (goalValidation) => {
	const response = await axios.post(
		`${REACT_APP_API}/validations`,
		goalValidation
	);
	return response.data;
};

export { createGoalValidation };
