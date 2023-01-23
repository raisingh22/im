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

// const { width } = Dimensions.get("window");
// const height = width * 0.6;
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
    <SafeAreaView>
      {/* <ScrollView 
        pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
        //   style={{ width, height }}
   > */}
    
      <View style={{ marginTop: 50 }}>
      <ScrollView
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ width, height }}
        >
        </ScrollView>

      </View>
          <View>
            
            <FlatList
              data={images}
              renderItem={renderItem}
              horizontal={false}
              keyExtractor={(item) => item.id.toString()}
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
