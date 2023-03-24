import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import PageRoute from "./pages/PageRoute";

function App() {
	return (
		<>
			<div className="md:fixed md:w-64 md:h-full bg-secondary text-white">
				<div className="border-b">
					<Header />
				</div>
				<div className="p-5">
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
