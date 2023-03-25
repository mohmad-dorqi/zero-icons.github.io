import * as ListIconOutline from "react-huge-icons/outline";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TitleSection, { Text } from "./TitleSection";

const ShowIcon = () => {
	const keys = Object.keys(ListIconOutline);

	const [copied, setCopied] = useState("");

	const setCopy = iconName => {
		setCopied(iconName);
		toast.success(`${copied} Copied to clipboard`, {
			position: "bottom-center",
			autoClose: 1000,
			closeOnClick: true,
			theme: "light",
		});
	};

	const colors = [
		{
			text: "text-red-500",
			border: "border-red-500",
		},
		{
			text: "text-sky-500",
			border: "border-sky-500",
		},
		{
			text: "text-blue-500",
			border: "border-blue-500",
		},
		{
			text: "text-orange-500",
			border: "border-orange-500",
		},
		{
			text: "text-amber-500",
			border: "border-amber-500",
		},
		{
			text: "text-yellow-500",
			border: "border-yellow-500",
		},
		{
			text: "text-lime-500",
			border: "border-lime-500",
		},
		{
			text: "text-yellow-500",
			border: "border-yellow-500",
		},
		{
			text: "text-emerald-500",
			border: "border-emerald-500",
		},
		{
			text: "text-yellow-500",
			border: "border-yellow-500",
		},
		{
			text: "text-green-500",
			border: "border-green-500",
		},
		{
			text: "text-teal-500",
			border: "border-teal-500",
		},
		{
			text: "text-cyan-500",
			border: "border-cyan-500",
		},
		{
			text: "text-indigo-500",
			border: "border-indigo-500",
		},
		{
			text: "text-violet-500",
			border: "border-violet-500",
		},
		{
			text: "text-purple-500",
			border: "border-purple-500",
		},
		{
			text: "text-fuchsia-500",
			border: "border-fuchsia-500",
		},
		{
			text: "text-pink-500",
			border: "border-pink-500",
		},
		{
			text: "text-rose-500",
			border: "border-rose-500",
		},
	];

	return (
		<div>
			<TitleSection title="Icons Name" subTitle="Please click on icons for copy to clipboard" />
			<ul className="list-none grid grid-cols-[repeat(auto-fill,minmax(115px,1fr))] text-">
				{keys &&
					keys.map((iconName, index) => {
						const IconComponent = ListIconOutline[iconName];

						const randomNumber = Math.floor(Math.random() * 17);

						return (
							<CopyToClipboard
								text={`<` + `${iconName} />`}
								onCopy={() => setCopy(iconName)}
								key={index}>
								<li className="p-5 flex flex-col items-center gap-3">
									<span
										className={`border-2 ${
											copied === iconName ? colors[randomNumber].border : ""
										} rounded-lg p-5 cursor-pointer`}>
										<IconComponent
											size="4.2rem"
											className={colors[randomNumber].text}
										/>
									</span>
									<span className="font-bold text-xs">{iconName}</span>
								</li>
							</CopyToClipboard>
						);
					})}
			</ul>
		</div>
	);
};

export default ShowIcon;
