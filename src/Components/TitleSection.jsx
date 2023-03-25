const TitleSection = ({ title, subTitle }) => {
	return (
		<div className="py-5 px-2">
			{title && (
				<h2 className="text-primary border-l-4 border-secondary pl-2 my-4 font-bold text-lg lg:text-xl xl:text-2xl">
					{title}
				</h2>
			)}

			{subTitle && <p>{subTitle}</p>}
		</div>
	);
};

export const Text = ({ p }) => {
	return <div className="py-5 px-2">{p && <p>{p}</p>}</div>;
};

export default TitleSection;
