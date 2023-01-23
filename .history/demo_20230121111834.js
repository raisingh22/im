import React, { Component, useState } from 'react';
import { FlatList, Dimensions,Image, Button,View, Text,TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
let images = require ('./api/image.json');
// let images =[
//   {
//     id:1,
//     source :"https://picsum.photos/1024/1024?nocache='.microtime()"
//   }
// ]
// const [detailViewVisible, setDetailViewVisible] =useState(false);
let {width: screenWidth, height: screenHeight}= Dimensions.get('window')
class AnimatedImages extends Component{
  render() {
  
    return(
      <Animatable.View 
      style={{flex:1, alignItems:"center"}}
      animation=""
      delay={this.props.imageIndex * 200}
  useNativeDriver={true}      
      >
      {this.props.children}
      </Animatable.View>
    )
  }
}
// const images = [
//   { id: 1, source: require('./assets/a.jpg') },
//   { id: 4, source: require('./assets/c.png') },
//   { id: 3, source: require('./assets/w.jpg') },
//   { id: 4, source: require('./assets/h.jpg') },
//   { id: 5, source: require('./assets/a.jpg') },
//   { id: 6, source: require('./assets/h.jpg') },
//   { id: 7, source: require('./assets/a.jpg') },
//   { id: 8, source: require('./assets/c.png') },
//   { id: 9, source: require('./assets/w.jpg') },
//   { id: 10, source: require('./assets/h.jpg') },
//   { id: 11, source: require('./assets/a.jpg') },
//   { id: 12, source: require('./assets/h.jpg') },
// ];

export default function demo(navigation) {
  //  const [imageUrl, setImageUrl] = useState('');
  const [detailViewVisible, setDetailViewVisible] =useState(false);

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

  const renderItem =  item  => {
    return (
      <AnimatedImages imageIndex={item.index}>
    {/* <View style={{flex:1 ,alignItems:"center"}}> */}
{/* <Text>{item.item.id}</Text> */}
<TouchableOpacity onPress={()=>{
  setDetailViewVisible(true)
}}>
{/* <View style={styles.imageContainer}> */}
      <Image source={{uri : item.item.source} } 
      style={styles.image }
     />
    
    {selectedId === item.id && <View style={styles.selected} 

/>}
    </TouchableOpacity>
  
    </AnimatedImages>
    )
    // <TouchableOpacity >
    //   <View style={styles.imageContainer}>
    //     <Image source={item.source} style={styles.image} />
        // {selectedId === item.id && <View style={styles.selected} 

        // />}
      // </View>
    // </TouchableOpacity>
  }

  return (
    <SafeAreaView>
    <ScrollView>
    {
      detailViewVisible ? (
        <View>
<Text>empty view</Text>
      </View>) :
         <FlatList
      data={images}
      renderItem={renderItem}
      horizontal={false}
      keyExtractor={item => item.id.toString()}
      numColumns={3}
    />
    
    } 
    {/* <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('demo')}
      /> */}
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
    height: screenWidth/3,
      width: screenWidth/3,
  },
 
});
