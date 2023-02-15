import ImageShow from "./ImageShow"

function ImageList ({images}) {
    
    const rerendered =images.map((image)=>{
        return <ImageShow key={image.alt_description} image={image} />
    })
    return (
        <>
        <div>{rerendered}</div>
        
        </>
    )
}
export default ImageList