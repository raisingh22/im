import React from 'react';
import { View ,Text ,FlatList , TouchableOpacity } from 'react-native';
const API_KEY ="vFFzwbcuTWrUA2ebLcgP7PXg1zkK58nckqORmGAjPXwVFZynbcTsoefo";
const API_URL="https://api.pexels.com/v1/curated?per_page=1";
const fetchImagesFromPexels = async ()=>{
    const data = await fetch(API_URL, {
        
        headers: {
            
            'Authorization': API_KEY
        }
     
    })
    const results = await data.json();
    return results
}
React.useEffect(()=>{
    const fetchImages = async ()=>{
        const images = await fetchImagesFromPexels();
        console.log(images);
    }
    fetchImages();
},[])
export default () => {
  return (
    <View>

    </View>
  )
}
