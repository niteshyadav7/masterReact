import axios from "axios";


const searchImages = async(term) => {
    const response =await axios.get ("https://api.unsplash.com/search/photos",{
        headers:{
            Authorization: "Client-ID _FtCndGRj_Wa1VFj8P0JRYgxdRt1VMQLL8l4BRqs9fQ"
        },
        params:{
            query:term,
        },
    })
    // console.log(response.data.results);
    return response.data.results;
}
export default searchImages