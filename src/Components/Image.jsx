function Image({ className, nameImage, alt, title, width, height }) {
	const ImageURL = new URL(`../assets/${nameImage}`, import.meta.url).href

	return (
		<img
			width={width}
			height={height}
			src={ImageURL}
			alt={alt}
			title={title}
			className={className}
		/>
	);
}

export default Image;
