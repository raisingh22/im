// import  {useEffect, useState} from "react";
import React from 'react';
import { View, Text, FlatList, TouchableOpacity ,StyleSheet } from "react-native";
import { useEffect, useState } from "react";
const API_KEY = "vFFzwbcuTWrUA2ebLcgP7PXg1zkK58nckqORmGAjPXwVFZynbcTsoefo";
const API_URL = "https://api.pexels.com/v1/curated?per_page=1";
const fetchImagesFromPexels = async () => {
  const data = await fetch(API_URL, {
    headers: {
      'Authorization': API_KEY,
    },
  });
  const results = await data.json();
  return results
};

export default () => {useEffect(() => {
  const [images, setImages] = useState(null);
  const fetchImages = async () => {
    const images = await fetchImagesFromPexels();
    // console.log(images);
  };
  fetchImages();
}, []);
  return( <View>
  

    </View>)
};
