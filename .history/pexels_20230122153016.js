// import  {useEffect, useState} from "react";
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
const API_KEY = "vFFzwbcuTWrUA2ebLcgP7PXg1zkK58nckqORmGAjPXwVFZynbcTsoefo";
const API_URL = "https://api.pexels.com/v1/curated?per_page=1";
const fetchImagesFromPexels = async () => {
  const data = await fetch(API_URL, {
    headers: {
      'Authorization': API_KEY,
    },
  });
  const {photos} = await data.json();
  return photos;
};

export default () => {
  
    const [images, setImages] = React.useState(null);
    useEffect(() => {
      const fetchImages = async () => {
        const images = await fetchImagesFromPexels();
      // setImages(images);
      console.log(images);
      };
      fetchImages();
    }, []);
    if (!images){
      return <Text>Loading...</Text>
    }
    console.log(images);
    return (<View>

<FlatList
  data={images}
  keyExtractor={item => item.id.toString()}
  renderItem={({item}) => {
    return)
  }

/>
    </View>)
  };
