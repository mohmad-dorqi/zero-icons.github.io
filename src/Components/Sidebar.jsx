import { NavLink } from "react-router-dom";

const Sidebar = props => {
	const menuSidebar = [
		{
			megaMenu: false,
			megaMenuName: "Home",
			megaMenuList: [],
			name: "Home",
			link: "/",
		},
		{
			megaMenu: true,
			megaMenuName: "Svg Converte",
			megaMenuList: [
				{
					name: "Usage",
					link: "/svgconverte",
				},
			],
		},
		{
			megaMenu: true,
			megaMenuName: "Huge Icons",
			megaMenuList: [
				{
					name: "Installation",
					link: "/hugeicons-installation",
				},
				{
					name: "Icons List",
					link: "/hugeicons",
				},
			],
		},
	];

	return (
		menuSidebar && (
			<div className="w-full" {...props}>
				<div className="flex flex-col gap-5">
					{menuSidebar.map(
						({ megaMenu, megaMenuName, megaMenuList, ...props }, index) =>
							megaMenu ? (
								<div key={index}>
									<p className="border-b pb-3 mb-3">{megaMenuName}</p>

									<div className="flex flex-col gap-5">
										{megaMenuList &&
											megaMenuList.map(({ name, link }) => (
												<NavLink
													to={link}
													className={({ isActive }) =>
														isActive
															? "bg-white text-primary rounded-md py-1 px-3 font-bold"
															: "bg-white text-secondary rounded-md py-1 px-3 font-bold"
													}>
													{name}
												</NavLink>
											))}
									</div>
								</div>
							) : (
								<NavLink
									key={index}
									to={props.link}
									className={({ isActive }) =>
										isActive
											? "bg-white text-primary rounded-md py-1 px-3 font-bold"
											: "bg-white text-secondary rounded-md py-1 px-3 font-bold"
									}>
									{props.name}
								</NavLink>
							),
					)}
				</div>
			</div>
		)
	);
};

export default Sidebar;
