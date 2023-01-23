import React, { Component, useState } from "react";
import {
  FlatList,
  Dimensions,
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import * as Animatable from "react-native-animatable";
// let images = require("./api/image.json");
const API_KEY = "vFFzwbcuTWrUA2ebLcgP7PXg1zkK58nckqORmGAjPXwVFZynbcTsoefo";
const API_URL = "https://api.pexels.com/v1/curated";


let { width: screenWidth, height: screenHeight } = Dimensions.get("window");
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

export default function de() {
  //  const [imageUrl, setImageUrl] = useState('');
  const [detailViewVisible, setDetailViewVisible] = useState(false);

 
  //   // generate a random number between 0 and the length of the imageUrls array
  //   const randomIndex = Math.floor(Math.random() * images.length);

  //   // set the imageUrl state to the randomly selected image url
  //   setImageUrl(images[randomIndex]);
  // }
  const [selectedId, setSelectedId] = useState(null);

  const onPress = (id) => {
    setSelectedId(id);
  };

  const renderItem = (item) => {
    return (
      <AnimatedImages imageIndex={item.index}>
        {/* <View style={{flex:1 ,alignItems:"center"}}> */}
        {/* <Text>{item.item.id}</Text> */}
        <TouchableOpacity>
          {/* <View style={styles.imageContainer}> */}
          <Image source={{ uri: item.item.source }} style={styles.image} />

          {selectedId === item.id && <View style={styles.selected} />}
        </TouchableOpacity>
      </AnimatedImages>
    );
    // <TouchableOpacity >
    //   <View style={styles.imageContainer}>
    //     <Image source={item.source} style={styles.image} />
    // {selectedId === item.id && <View style={styles.selected}

    // />}
    // </View>
    // </TouchableOpacity>
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {detailViewVisible ? (
          <View>
            <Text>empty view</Text>
          </View>
        ) : (
          <View>
            
            <FlatList
              data={images}
              renderItem={renderItem}
              horizontal={false}
              keyExtractor={(item) => item.id.toString()}
              numColumns={4}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    height: screenWidth / 4,
    width: screenWidth / 4,
  },
});
