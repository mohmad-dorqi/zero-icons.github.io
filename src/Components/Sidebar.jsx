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
				<ul>
					{menuSidebar.map(({ name, link }, index) => (
						<li key={index}>
							<NavLink to={link}>{name}</NavLink>
						</li>
					))}
				</ul>
			</div>
		)
	);
};

export default Sidebar;
