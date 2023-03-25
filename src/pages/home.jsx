import TitleSection, { Text } from "../Components/TitleSection";
import Image from "../Components/Image";
import { NavLink } from "react-router-dom";

const Home = () => {
	const packageList = [
		{
			image: "zero-icons.svg",
			goTo: {
				name: "Svg Convert",
				link: "/svgconverte",
			},
		},
		{
			image: "zero-icons.svg",
			goTo: {
				name: "Huge Icons",
				link: "/hugeicons-installation",
			},
		},
	];

	return (
		<>
			<TitleSection title="Package List For Zero Icons" />
			<ul className="list-none grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5">
				{packageList &&
					packageList.map((item, index) => (
						<li
							key={index}
							className="bg-white border rounded-lg flex flex-col items-center justify-between rounded-t-lg">
							<Image nameImage={item.image} className="w-52" />

							<NavLink to={item.goTo.link} className="py-2 px-3 font-bold hover:text-secondary">
								{item.goTo.name}
							</NavLink>
						</li>
					))}
			</ul>
		</>
	);
};

export default Home;
