import { Link } from "react-router-dom";
import "./Navbar.css";
import AddGoalButton from "./AddGoalButton";

const Navbar = () => {
	return (
		<div id="navbarContainer">
			<div id="navbar">
				<a>
					<Link to="/">
						<p>Goals</p>
					</Link>
				</a>
				<AddGoalButton />
			</div>
		</div>
	);
};

export default Navbar;
