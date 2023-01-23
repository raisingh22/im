import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, AsyncStorage } from 'react-native';
import image from './assets/image.json';

const Gallery = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    fetch('assets/image.json')
        .then(response => response.json())
        .then(data => setImageData(data))
        .catch(error => console.log(error))
  }, []);

  return (
    <View>
      <ScrollView>
        {imageData.map(image => (
          <View key={image.id}>
            <Image source={{ uri: image.url }} style={{ width: '100%', height: 200 }} />
            <Text>{image.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default Gallery;
