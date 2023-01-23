import React from 'react';
import { Text , View , Flatlist } from 'react-native';


const API_KEY ="vFFzwbcuTWrUA2ebLcgP7PXg1zkK58nckqORmGAjPXwVFZynbcTsoefo";
const API_URL="https://api.pexels.com/v1/curated?per_page=1";
const fetchImagesFromPexels = async ()=>{
    const data = await fetch(API_URL, {
        
        headers: {
            
            'Authorization': API_KEY
        }
     
    })
    const results = await data.json();
    console.log(results);
}
export default ()=> {

    return (
        <View>
            <Flatlist
                data={API_URL}
                renderItem={({item}) => (
                    <Text>{item}</Text>
                )}
            />
        </View>
    )
}