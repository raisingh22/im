import React from "react";
import { View, Text, Image, FlatList } from "react-native";
// const images = require("./api/image.json");
const images = [
  {
    id: "1",
    source:
      "https://source.unsplash.com/random/300x200?sig=${Math.random() *40}",
  },
  { id: "2",
   source: 
   "https://source.unsplash.com/random/200x200?sig=2" },
  { id: "3",
   source: "https://source.unsplash.com/random/200x200?sig=343" },
  {
    id: "4",
    source:
      "https://source.unsplash.com/random/300x200?sig=${Math.random()*40}",
  },
  {
    id: "1",
    source:
      "https://source.unsplash.com/random/300x200?sig=${Math.random()*92}",
  },
  {
    id: "1",
    source:
      "https://source.unsplash.com/random/300x200?sig=${Math.random()*91}",
  },
  {
    id: "1",
    source: "https://source.unsplash.com/random/300x200?sig=${Math.random()*4}",
  },
];
export default class Slider extends React.Component {
  render() {
    const renderItem = (item) => {
      return (
        <View>
          {/* {
         images.map((image, index) =>(
          
          <Image
            key={index}
            source={{ uri: image }}
            />
         ))

        } */}
          <Image
            source={{ uri: item.item.source }}
            style={{ width: 100, height: 100, borderRadius: 10 }}
          />
        </View>
      );
    };
    return (
      <View>
        {/* {
        images.map((source , index) =>(
          <Image
          
          key={index}
           source={{ uri: source }}
            style={{ width: 100, height: 100, borderRadius: 10 }}
          />
        )
        )
      } */}
        {/* <Image
          //     data={images}
          //     renderItem={renderItem}
          //     source={{uri : item.item.source}}
          //     keyExtractor={item => item.id.toString()}
          source={{
            uri: "https://source.unsplash.com/random/300x200?sig=${Math.random() *40}",
          }}
          style={{ height: 100, width: "100%", resizeMode: "contain" }}
        />
         */}
        <View style={{ marginTop: 50 }}>
          {/* <FlatList 
          data={images}
          renderItem ={renderItem} 
          keyExtractor={
            (item) => 
            item.id.toString()
            } /> */}
        </View>
      </View>
    );
  }
}
