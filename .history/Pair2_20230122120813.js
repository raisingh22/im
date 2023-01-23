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
const images = [

    {
       source: "https://source.unsplash.com/random/300x200?sig=${Math.random() *40}"},
    "https://source.unsplash.com/random/200x200?sig=2",
    "https://source.unsplash.com/random/200x200?sig=343",
    "https://source.unsplash.com/random/300x200?sig=${Math.random()*40}",
    "https://source.unsplash.com/random/300x200?sig=${Math.random()*92}",
    "https://source.unsplash.com/random/300x200?sig=${Math.random()*91}",
    "https://source.unsplash.com/random/300x200?sig=${Math.random()*4}",
  ];
let { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const { width } = Dimensions.get("window");
const height = width * 0.6;
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

  
  const [selectedId, setSelectedId] = useState(null);

  const onPress = (id) => {
    setSelectedId(id);
  };

  const renderItem = (item) => {
    return (
      <AnimatedImages imageIndex={item.index}>
        <TouchableOpacity>
          <Image source={{ uri: item.item.source }} style={styles.image} />

          {selectedId === item.id && <View style={styles.selected} />}
        </TouchableOpacity>
      </AnimatedImages>
    );
   
  };

  return (
    <SafeAreaView style={{backgroundColor:"black" , alignItems:"center" ,}}>  
      <View style={{ paddingVertical:100 , color:"black"}}>
      <ScrollView
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ width, height }}
        >
        {
            images.map((images, index) => (
            <Image
            data={images}
              key={index}
              source={{ uri: images }}
              style={{ height, width, resizeMode: "contain" }}
            />
          ))
        }
        </ScrollView>

      </View>
          <View>
            
            <FlatList
              data={images}
              renderItem={renderItem}
              horizontal={false}
              keyExtractor={(item) => item.source.}
              numColumns={4}
            />
          </View>
        
      {/* </ScrollView> */}
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
