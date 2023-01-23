import { CameraRoll } from "@react-native-camera-roll/camera-roll";
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




export default temp = () => {
    // const [images, setImages] = React.useState(null);
    // useEffect(() => {
    //   const fetchImages = async () => {

    useEffect(()=>{
        
    })
    //     const images = await fetchImagesFromPexels();
    const getPhotos = async ()=>{
        const photos= await CameraRoll.getPhotos({
            first:10
        })
        console.log(photos);
        
    }
        
    //     setImages(images);
    //      console.log(images ,"Images");
    //   };
    //   fetchImages();
    // }, []);
  return <SafeAreaView>
    <ScrollView>
<View>
     {/* <TouchableOpacity>
            <Image
                source={{ uri: photos.src.portrait }}
                style={styles.image}
            />
     </TouchableOpacity> */}
</View>
    </ScrollView>
  </SafeAreaView>;
};
