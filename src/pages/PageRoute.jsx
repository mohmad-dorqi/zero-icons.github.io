import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import HugeIcons from "./HugeIcons";
import HugeIconsInstallation from "./HugeIconsInstallation";
import SvgConvertInstallation from "./SvgConvert";

const PageRoute = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />

			<Route
				path="/svgconverte"
				element={<SvgConvertInstallation />}
			/>

			<Route
				path="/hugeicons-installation"
				element={<HugeIconsInstallation />}
			/>
			<Route path="/hugeicons" element={<HugeIcons />} />
		</Routes>
	);
};

export default PageRoute;
