import React, { Component, useState } from 'react';
import { FlatList, Dimensions,Image, Button,View, Text,TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
let images = require ('./api/image.json');



export default function Pair 