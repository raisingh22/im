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
export default  () => {
    const [images, setImages] = React.useState(null);
    useEffect(() => {
      const fetchImages = async () => {
        const images = await fetchImagesFromPexels();
        setImages(images);
        // console.log(images);
      };
      fetchImages();
    }, []);