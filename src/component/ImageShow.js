

function ImageShow ({image}) {
    return (
        // <div>{image.id}</div>
        // <div>{image.alt_description}</div>
        <div>
            <img src={image.urls.small} alt="images" />
        </div>
    )
}
export default ImageShow