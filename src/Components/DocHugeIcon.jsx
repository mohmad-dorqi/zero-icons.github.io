import Image from "./Image";
import ShowCodeJSX from "./ShowCodeJSX";

export const Description = () => {
	return (
		<div className="flex flex-col gap-5 py-5 px-2">
			<h1 className="text-secondary text-base md:text-xl lg:text-2xl xl:text-3xl">
				Huge Icon
			</h1>

			<div className="flex flex-wrap gap-5 items-center">
				<img
					width="60"
					src="https://img.shields.io/github/stars/zero-icons/huge-icons?color=gold&style=flat"
					alt=""
				/>
				<img
					width="85"
					src="https://img.shields.io/npm/l/react-huge-icons?color=green&style=flat"
					alt=""
				/>
				<img
					width="90"
					src="https://img.shields.io/npm/v/react-huge-icons?color=blue&style=flat"
					alt=""
				/>
				<p className="py-1 px-3 bg-green-100 text-green-900 text-xs rounded">
					Completing soon ...
				</p>
			</div>

			<div>
				<p>
					We are here to convert the Huge Icons package into a ReactJs package.
				</p>
			</div>

			<div className="flex felx-wrap gap-5 items-center">
				<a href="https://www.npmjs.com/package/react-huge-icons" target="_blank">
					<Image nameImage="npm.png" className="w-10 h-10" />
				</a>
				<a href="https://yarnpkg.com/package/react-huge-icons" target="_blank">
					<Image nameImage="yarn.png" className="w-10 h-10" />
				</a>
				<a href="https://github.com/zero-icons/huge-icons" target="_blank">
					<Image nameImage="github.png" className="w-10 h-10" />
				</a>
			</div>
		</div>
	);
};

export const Installation = () => {
	return (
		<>
			<h2 className="py-5 px-2 text-primary font-bold text-base lg:text-lg xl:text-xl">
				Installation For npm
			</h2>
			<ShowCodeJSX code={`npm i react-huge-icons`} language="bash" />

			<h2 className="py-5 px-2 text-primary font-bold text-base lg:text-lg xl:text-xl">
				Installation For Yarn
			</h2>
			<ShowCodeJSX code={`yarn add react-huge-icons`} language="bash" />
		</>
	);
};

export const Usage = () => {
	return (
		<>
			<div className="py-5 px-2">
				<h2 className="text-primary font-bold text-base lg:text-lg xl:text-xl">
					Usage
				</h2>
				<p>Outline Icons</p>
			</div>
			<ShowCodeJSX
				code={`
import { Archive } from "react-huge-icons/outline";

function App() {
	return (
		<div className="App">
			<Archive />
		</div>
	);
}

export default App;
			`}
				language="bash"
			/>

			<div className="py-5 px-2">
				<h2 className="text-primary font-bold text-base lg:text-lg xl:text-xl">
					Usage
				</h2>

				<p>Solid Icons</p>
			</div>
			<ShowCodeJSX
				code={`
import { Archive } from "react-huge-icons/solid";

function App() {
	return (
		<div className="App">
			<Archive />
		</div>
	);
}

export default App;
			`}
				language="bash"
			/>
		</>
	);
};

const DocHugeIcon = () => {
	return (
		<>
			<Description />
			<Installation />
			<Usage />
		</>
	);
};

export default DocHugeIcon;
