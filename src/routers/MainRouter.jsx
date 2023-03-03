import { Route, Routes } from "react-router-dom";
import GoalsPage from "../pages/GoalsPage";
import AddGoal from "../components/goal/AddGoal";
const MainRouter = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<GoalsPage />} />
				<Route path="/add-goal" element={<AddGoal />} />
			</Routes>
		</>
	);
};

export default MainRouter;
