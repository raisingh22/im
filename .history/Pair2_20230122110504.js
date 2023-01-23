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
let images = require("./api/image.json");
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
  const [detailViewVisible, setDetailViewVisible] = useState(false);

  // const generateRandomImage = () => {
  //   // array of image urls
  //   const images = [
  //     'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
  //     'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
  //     'https://images.unsplash.com/photo-1505817331272-f4cc3b4173a1',
  //     'https://images.unsplash.com/photo-1502602898657-3e91760cbb34'
  //   ];

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
