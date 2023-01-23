// import  {useEffect, useState} from "react";
import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useEffect, useState, useRef } from "react";
const { width, height } = Dimensions.get("screen");
const API_KEY = "vFFzwbcuTWrUA2ebLcgP7PXg1zkK58nckqORmGAjPXwVFZynbcTsoefo";
const API_URL = "https://api.pexels.com/v1/curated";
const IMAGE_SIZE= 80;
const SPACING = 10;
const fetchImagesFromPexels = async () => {
  const data = await fetch(API_URL, {
    headers: {
      Authorization: API_KEY,
    },
  });
  const { photos } = await data.json();
  return photos;
};

export default () => {
  const [images, setImages] = React.useState(null);
  useEffect(() => {
    const fetchImages = async () => {
      const images = await fetchImagesFromPexels();
      setImages(images);
      // console.log(images);
    };
    fetchImages();
  }, []);
  const topRef= useRef();
  const thumbRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollToActiveIndex = (index) =>{
    setActiveIndex(index)
  }
  if (!images) {
    return <Text>Loading...</Text>;
  }

  console.log(images);
  
  return (
    <View style={{flex :1 , backgroundColor : "#fff"}}>
      <FlatList 
      ref={topRef}
        data={images}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={ev =>{
          scrollToActiveIndex(Math.floor(ev.nativeEvent.contentOffset.x/ width))
        }}
        renderItem={({ item }) => {
          return (
            <View style={{ width, height }}>
              <Image
                source={{ uri: item.src.portrait }}
                style={[StyleSheet.absoluteFillObject]}
              />
            </View>
          );
        }}
      />
      <FlatList
      ref={thumbRef}
        data={images}
        keyExtractor={(item) => item.id.toString()}
       horizontal
       // pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{position: "absolute", bottom: IMAGE_SIZE}}
        contentContainerStyle={{paddingHorizontal : SPACING}}
        renderItem={({ item ,index }) => {
          return (
               <TouchableOpacity
               
               
               >

<Image
                source={{ uri: item.src.portrait }}
                style={{
                  width : IMAGE_SIZE,
                  height:IMAGE_SIZE,
                   borderRadius:12 ,
                   marginRight: SPACING,
                   borderWidth:2,
                   borderColor: activeIndex === index ? 'white' : 'true'

                }}
              />
               </TouchableOpacity>
           
          );
        }}
      />
      
    </View>
  );
};
