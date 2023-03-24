function Image(props) {
	const ImageURL = new URL(`../assets/${props.nameImage}`, import.meta.url).href;

	return <img src={ImageURL} {...props} />;
}

export default Image;
