import React, { Component, useState } from 'react';
import { FlatList, Dimensions,Image, Button,View, Text,TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
// let images = require ('./api/image.json');
const { width } = Dimensions.get("window");
const height = width * 0.6;
const images = [
    "https://source.unsplash.com/random/300x200?sig=${Math.random() *40}",
    "https://source.unsplash.com/random/200x200?sig=2",
    "https://source.unsplash.com/random/200x200?sig=343",
    "https://source.unsplash.com/random/300x200?sig=${Math.random()*40}",
    "https://source.unsplash.com/random/300x200?sig=${Math.random()*92}",
    "https://source.unsplash.com/random/300x200?sig=${Math.random()*91}",
    "https://source.unsplash.com/random/300x200?sig=${Math.random()*4}",
  ];


export default function Pair (){


// const renderItem = item =>{
//     <Image

//     source={{uri: image}}
//     />
// }

    return (

    <SafeAreaView >
    
    <View style={{ marginTop: 50, width, height }}>
<ScrollView   pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ width, height }}
      >
{/* <FlatList
      data={images}
      renderItem={renderItem}
      horizontal={false}
      keyExtractor={item => item.item.id.toString()}
      numColumns={3}
    /> */}

  {
    images.map((image, index) =>(
      <Image
    key={index}
    source={{uri:image}}
    style={{height: '100%', width: '100%', resizeMode:"contain"}}
      />
    ))
  }

</ScrollView>
<View style={{
            flexDirection: "row",
            position: "absolute",
            bottom: 0,
            alignSelf: "center",
          }}
        >
        {
          images.map((i , k)=>(
             <Text 
             key={k}
          style={{
             color: "white" 
             }}>???</Text>
          ))
        }
         

</View>
</View>
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    imageContainer: {
      flex: 1,
      alignItems: 'center',
      padding: 10,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 10,
    //   height: screenWidth/3,
    //     width: screenWidth/3,
    },
   
  });