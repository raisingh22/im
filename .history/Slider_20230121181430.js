import React from "react";
import { View, Text, Image } from "react-native";
let  images = require( './api/image.json'); 

export default class  Slider extends React.Component {

    render(){
        const renderItem = item =>{
            return item
        }
        return(

            <View>
               <Image 
               source={{uri : item.item.source}}

               />
            </View>
        )
    }


}