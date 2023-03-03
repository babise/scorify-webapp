import axios from "axios";

const REACT_APP_API = "http://localhost:8000/api";

const getAllGoals = async () => {
	const response = await axios.get(`${REACT_APP_API}/goals`);
	return response.data;
};

const createGoal = async (goal) => {
	const response = await axios.post(`${REACT_APP_API}/goals`, goal);
	return response.data;
};

export { getAllGoals, createGoal };
