import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import PageRoute from "./pages/PageRoute";

function App() {
	return (
		<>
			<div className="md:fixed md:w-64 md:h-full bg-secondary text-white">
				<Header />
				<Sidebar />
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
