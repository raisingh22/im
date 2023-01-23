import React from 'react';
import { Text , View , Flatlist } from 'react-native';


const API_KEY ="";
const API_URL="https://api.pexels.com/v1/curated?per_page=1"
export default ()=> {

    return (
        <View>
            <Flatlist
                data={API_URL}
                renderItem={({item}) => (
                    <Text>{item}</Text>
                )}
            />
        </View>
    )
}