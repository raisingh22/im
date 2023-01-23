import React , {useEffect, useState} from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
// import { useEffect, useState } from "react";
// const API_KEY = "vFFzwbcuTWrUA2ebLcgP7PXg1zkK58nckqORmGAjPXwVFZynbcTsoefo";
// const API_URL = "https://api.pexels.com/v1/curated";
// const fetchImagesFromPexels = async () => {
    
//   const data = await fetch(API_URL, {
//     headers: {
//       Authorization: API_KEY,
//     },
    
//   });
//   const { photos } = await data.json();
//   return photos;

// };
//console.log(photos);


const getPhotos = async ()=>{
    const photos= await
}

export default temp = () => {
    const [images, setImages] = React.useState(null);
    useEffect(() => {
      const fetchImages = async () => {

        const images = await fetchImagesFromPexels();
        
        
        setImages(images);
         console.log(images ,"Images");
      };
      fetchImages();
    }, []);
  return <SafeAreaView>
    <ScrollView>
<View>
     <TouchableOpacity>
            <Image
                source={{ uri: photos.src.portrait }}
                style={styles.image}
            />
     </TouchableOpacity>
</View>
    </ScrollView>
  </SafeAreaView>;
};
