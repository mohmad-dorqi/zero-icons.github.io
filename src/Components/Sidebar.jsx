import { NavLink } from "react-router-dom";

const Sidebar = props => {
	const menuSidebar = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "Huge Icons",
			link: "/huge-icons",
		},
	];

	return (
		menuSidebar && (
			<div {...props}>
				<ul className="flex flex-col gap-5">
					{menuSidebar.map(({ name, link }, index) => (
						<NavLink
							to={link}
							className={({ isActive }) =>
								isActive ? "bg-white text-primary rounded-md py-1 px-3 font-bold" : ""
							}>
							{name}
						</NavLink>
					))}
				</ul>
			</div>
		)
	);
};

export default Sidebar;
