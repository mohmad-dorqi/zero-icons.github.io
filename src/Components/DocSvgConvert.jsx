import Image from "./Image";
import ShowCodeJSX from "./ShowCodeJSX";
import TitleSection, { Text } from "./TitleSection";

export const Description = () => {
	return (
		<div className="flex flex-col gap-5 py-5 px-2">
			<h1 className="text-secondary text-base md:text-xl lg:text-2xl xl:text-3xl">
				Svg Convert to Components
			</h1>

			<div className="flex flex-wrap gap-5 items-center">
				<img
					width="60"
					src="https://img.shields.io/github/stars/zero-icons/react-svg-convert?color=gold&style=flat"
					alt=""
				/>
				<img
					width="85"
					src="https://img.shields.io/npm/l/react-svg-convert?color=green&style=flat"
					alt=""
				/>
				<img
					width="90"
					src="https://img.shields.io/npm/v/react-svg-convert?color=blue&style=flat"
					alt=""
				/>
				<p className="py-1 px-3 bg-green-100 text-green-900 text-xs rounded">
					Completing soon ...
				</p>
			</div>

			<p>Svg Converter react components.</p>

			<div className="flex felx-wrap gap-5 items-center">
				<a
					href="https://www.npmjs.com/package/react-svg-convert"
					target="_blank">
					<Image nameImage="npm.png" className="w-10 h-10" />
				</a>
				<a href="https://yarnpkg.com/package/react-svg-convert" target="_blank">
					<Image nameImage="yarn.png" className="w-10 h-10" />
				</a>
				<a
					href="https://github.com/zero-icons/react-svg-convert"
					target="_blank">
					<Image nameImage="github.png" className="w-10 h-10" />
				</a>
			</div>
		</div>
	);
};

export const Installation = () => {
	return (
		<>
			<TitleSection title="Installation For npm" />

			<ShowCodeJSX code={`npm i react-svg-convert`} language="bash" />

			<TitleSection title="Installation For Yarn" />

			<ShowCodeJSX code={`yarn add react-svg-convert`} language="bash" />
		</>
	);
};

export const Usage = () => {
	return (
		<>
			<TitleSection title="Usage" subTitle="Outline Icons" />

			<ShowCodeJSX
				code={`
import SvgConvert from "react-svg-convert";

<SvgConvert
	attr={{
		viewBox: "0 0 24 24",
	}}
	child={[
		{
			tag: "path",
			attr: {
				d: "M6.25 8C6.25 7.58579....",
				fill: "currentColor",
				fillRule: "evenodd",
				clipRule: "evenodd",
			},
		},
	]}
/>
			`}
				language="bash"
			/>
		</>
	);
};

export const Props = () => {
	return (
		<>
			<TitleSection title="Props" subTitle="Available props" />

			<Text p="parent tag" />

			<ShowCodeJSX code={`tag="svg" /* Default: svg */`} language="bash" />

			<Text p="Attribute for parent tag" />

			<ShowCodeJSX
				code={`
attr={{
	viewBox: "0 0 24 24", /* Default: "0 0 24 24" */
}}
			`}
				language="bash"
			/>

			<Text p="Children tag for parent tag" />

			<ShowCodeJSX
				code={`
child={[
	{
		tag: "path", /* Number one child tag name */

		/* Number one child Attr Prop - Object */
		attr: {
			d: "M6.25 8C6.25 7.58579....",
			fill: "currentColor",
			fillRule: "evenodd",
			clipRule: "evenodd",
		},
	}, 

	.

	/* Other Child */

	.
]}
			`}
				language="bash"
			/>
		</>
	);
};

const DocSvgConverts = () => {
	return (
		<div className="py-5">
			<Description />
			<Installation />
			<Usage />
			<Props />
		</div>
	);
};

export default DocSvgConverts;
