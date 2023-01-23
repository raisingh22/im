// import  {useEffect, Component , useState} from "react";
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

import * as Animatable from "react-native-animatable";
import { useEffect, useState,Component, useRef } from "react";
let { width: screenWidth, height: screenHeight } = Dimensions.get("window");

// const { width, height } = Dimensions.get("screen");
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
class AnimatedImages extends Component {
    render() {
      return (
        <Animatable.View
          style={{ flex: 1, alignItems: "center" }}
          animation="zoomInDown"
          delay={this.props.imageIndex * 100}
          useNativeDriver={true}
        >
          {this.props.children}
        </Animatable.View>
      );
    }
  }
export default temp =  () => {
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

  console.log(images);

 
  return (
    <View style={{flex :1 , backgroundColor : "#fff"}}>
      <FlatList 
     
        data={images}
        keyExtractor={(item) => item.id.toString()}
      //  horizontal
      numColumns={2}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={ev =>{
        //   scrollToActiveIndex(Math.floor(ev.nativeEvent.contentOffset.x/ width))
        }}
        renderItem={({ item }) => {
          return (
            <View >
              <Image
                source={{ uri: item.src.portrait }}
                style={{width: 100, height: 100, borderRadius:10,
                height: screenWidth /2
                width
                }}
              />
            </View>
          );
        }}
      />
      </View>
  )





































}