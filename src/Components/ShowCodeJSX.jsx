import Highlight, { defaultProps } from "prism-react-renderer";
import PrismTheme from "prism-react-renderer/themes/nightOwl";
import { FileWrite } from "react-huge-icons/outline";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const ShowCodeJSX = ({ code, language }) => {
	const exampleCode = code.trim() || "//Zero Icon";
	const exampleLanguage = language.trim() || "jsx";

	const setCopy = () => {
		toast.success(`Copied to clipboard`, {
			position: "bottom-center",
			autoClose: 1000,
			closeOnClick: true,
			theme: "light",
		});
	};

	return (
		<Highlight
			{...defaultProps}
			code={exampleCode}
			language={exampleLanguage}
			theme={PrismTheme}>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				(className += " " + "overflow-auto"),
				(
					<div className="relative bg-primary py-2 px-5 rounded-lg">
						<CopyToClipboard
							text={exampleCode}
							className="absolute top-2 right-2 cursor-pointer bg-secondary text-white p-0.5 rounded"
							onCopy={setCopy}>
							<FileWrite size="1.5rem" />
						</CopyToClipboard>
						<pre className={className} style={style}>
							{tokens.map((line, i) => (
								<div {...getLineProps({ line, key: i })}>
									{line.map((token, key) => (
										<span {...getTokenProps({ token, key })} />
									))}
								</div>
							))}
						</pre>
					</div>
				)
			)}
		</Highlight>
	);
};

export default ShowCodeJSX;
