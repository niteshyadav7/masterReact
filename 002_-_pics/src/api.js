import axios from "axios";

const searchImages =async () => {
    const response =await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:"Client-ID _FtCndGRj_Wa1VFj8P0JRYgxdRt1VMQLL8l4BRqs9fQ",
        },
        params:{
            query:"cars",
        }
    })
    console.log(response);
    return response
}
export default searchImages