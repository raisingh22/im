import React, { Component, useState , useEffect} from "react";
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

const fetchImagesFromPexels = async () => {
    const data = await fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const { photos } = await data.json();
    return photos;
  };
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

export default function combo() {
    const [images, setImages] = React.useState(null);
    useEffect(() => {
      const fetchImages = async () => {
        const images = await fetchImagesFromPexels();
        setImages(images);
        // console.log(images);
      };
      fetchImages();
    }, []);
  const [detailViewVisible, setDetailViewVisible] = useState(false);

 
  
  const [selectedId, setSelectedId] = useState(null);

  const onPress = (id) => {
    setSelectedId(id);
  };

//   const renderItem = (item) => {
//     return (
//       <AnimatedImages imageIndex={item.index}>
//         <TouchableOpacity>
//           <Image source={{ uri: item.item.source }} style={styles.image} />

//           {selectedId === item.id && <View style={styles.selected} />}
//         </TouchableOpacity>
//       </AnimatedImages>
//     );
  
//   };

  return (
    <SafeAreaView>
      {/* <ScrollView> */}
         <View>           
            <FlatList
              data={images}
              
              }}
             // horizontal
              keyExtractor={(item) => item.id.toString()}
              numColumns={4}
              renderItem={({item})=>{
                return (
                    <View>
                        <Image
                            source={{ uri: item.src.portrait }}
                            style={[StyleSheet.absoluteFillObject]}
                        />
                    </View>
                )
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
