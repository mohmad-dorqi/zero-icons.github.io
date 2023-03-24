import Image from "../Components/Image";
const Header = props => {
	return (
		<div {...props}>
			<p>Zero Icons</p>
			<Image nameImage="zero-icons-white.svg" />
		</div>
	);
};

export default Header;
