import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import HugeIcons from "./HugeIcons";

const PageRoute = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/huge-icons" element={<HugeIcons />} />
		</Routes>
	);
};

export default PageRoute;