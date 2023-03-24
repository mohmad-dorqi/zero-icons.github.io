import ShowIcon from "./Components/ShowIcon";
import DocHugeIcon from "./Components/DocHugeIcon";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";

function App() {
	return (
		<>
			<div className="md:fixed md:w-64 md:h-full bg-secondary text-white">
				<Header />
				<Sidebar />
			</div>

			<main className="w-full md:pl-64">
				<div className="px-5">
					<DocHugeIcon />

					<ShowIcon />
				</div>
			</main>
		</>
	);
}

export default App;
