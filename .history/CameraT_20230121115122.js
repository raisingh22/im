import React from 'react';
import { FlatList, Dimensions,Image, Button,View, Text,TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import CameraRoll from 'react-native-community/cameraroll';
const CameraT=()=>{

    const checkPermission =async ()=>{

        const getPhotos =async ()=>{
            const photos = await CameraRoll.getPhotos({
                first
            })
        }
    }


return (
    <SafeAreaView>
        <ScrollView>

        </ScrollView>
    </SafeAreaView>
)
}

