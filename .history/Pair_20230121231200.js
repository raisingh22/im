import React, { Component, useState } from 'react';
import { FlatList, Dimensions,Image, Button,View, Text,TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
// let images = require ('./api/image.json');



export default function Pair (){


const renderItem = item =>{
    <Image

    source={{uri:item.image}}
    />
}

    return (

    <SafeAreaView style={styles.container}>
<ScrollView>
<FlatList
      data={images}
      renderItem={renderItem}
      horizontal={false}
      keyExtractor={item => item.id.toString()}
      numColumns={3}
    />

</ScrollView>
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