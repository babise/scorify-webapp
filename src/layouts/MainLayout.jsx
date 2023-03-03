//app css
import "../App.css";
import Navbar from "../components/ui/Navbar";

const MainLayout = ({ children }) => {
	return (
		<div className="App">
			<div>
				<Navbar />
				<main>{children}</main>
			</div>
		</div>
	);
};

export default MainLayout;
