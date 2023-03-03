import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./routers/MainRouter";
import MainLayout from "./layouts/MainLayout";

import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<MainLayout>
				<MainRouter />
			</MainLayout>
		</BrowserRouter>
	);
}

export default App;
