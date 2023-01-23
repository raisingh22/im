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
import { useEffect, useState } from "react";
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
  if (!images) {
    return <Text>Loading...</Text>;
  }
const topRef= useRef();
  console.log(images);
  
  return (
    <View>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
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
        data={images}
        keyExtractor={(item) => item.id.toString()}
       horizontal
       // pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{position: "absolute", bottom: IMAGE_SIZE}}
        contentContainerStyle={{paddingHorizontal : SPACING}}
        renderItem={({ item }) => {
          return (
                <Image
                source={{ uri: item.src.portrait }}
                style={{
                  width : IMAGE_SIZE,
                  height:IMAGE_SIZE,
                   borderRadius:12 ,
                   marginRight: SPACING,
                   
                }}
              />
           
          );
        }}
      />
      
    </View>
  );
};
