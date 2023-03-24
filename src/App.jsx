import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import PageRoute from "./pages/PageRoute";
import { useState } from "react";

function App() {
	const [toggleMenu, setToggleMenu] = useState(false);

	const toggleMenuHandler = () => {
		setToggleMenu(!toggleMenu);
	};

	return (
		<>
			<div className="md:fixed md:w-64 md:h-full bg-secondary text-white">
				<div className="border-b flex gap-5 items-center justify-between">
					<Header />
					<div className="md:hidden">
						<button onClick={toggleMenuHandler}>
							{toggleMenu ? (
								<svg
									className="text-white w-20 h-20"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M16.2426 7.75738L7.75732 16.2427M16.2426 16.2426L7.75732 7.75732"
										stroke="currentColor"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							) : (
								<svg
									className="text-white w-20 h-20"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M7 8H17M7 12H17M7 16H17"
										stroke="currentColor"
										stroke-width="1.5"
										stroke-linecap="round"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
				<div className={`${toggleMenu ? "flex" : "hidden"} p-5 md:flex`}>
					<Sidebar />
				</div>
			</div>

			<main className="w-full md:pl-64">
				<div className="px-5">
					<PageRoute />
				</div>
			</main>
		</>
	);
}

export default App;
