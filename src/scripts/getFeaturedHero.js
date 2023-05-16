import axios from "axios";

export const getFeaturedHero = async (id) => {
    
const accessToken = '638614294782838';
    const {data: powerstats} = await axios.get(`https://www.superheroapi.com/api.php/${accessToken}/${id}/powerstats`)
    const {data: image} = await axios.get(`https://www.superheroapi.com/api.php/${accessToken}/${id}/image`)

    // console.log(image, powerstats, powerstats.name);

    return { name: powerstats.name, powerstats, imgUrl: image.url }
}

