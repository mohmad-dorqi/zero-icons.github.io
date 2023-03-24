import Image from "../Components/Image";
const Header = props => {
	return (
		<div className="m-auto w-40 py-5" {...props}>
			<div className="flex gap-5 items-center ">
				<Image nameImage="zero-icons-white.svg" className="w-10" />
				<p className="font-bold text-base lg:text-lg xl:text-xl ">Zero Icons</p>
			</div>
		</div>
	);
};

export default Header;
