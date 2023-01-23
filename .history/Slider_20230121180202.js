import React, { Component, useState } from 'react';
import { FlatList, Dimensions,Image, View, Text,TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
let images = require ('./api/image.json');

const Slider =()=>{
 
    return (
        <SafeAreaView>
        <ScrollView>
        {
          detailViewVisible ? (
            <View>
    <Text>empty view</Text>
          </View>) :
          <View>      <FlatList
          data={images}
          renderItem={renderItem}
          horizontal={false}
          keyExtractor={item => item.id.toString()}
          numColumns={4}
        /></View>
        } 
        
        </ScrollView>
        </SafeAreaView>
      );
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
        height: screenWidth/4,
          width: screenWidth/4,
      },
     
    });
    
export default Slider;