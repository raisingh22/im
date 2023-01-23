import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import demo from './demo';
import CameraT from './CameraT';
// import harry from './harry';
// import de from './gallery';
import Slider from './Slider';
import Pexel from './Pexel';
import pexels from './pexels';
i
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="pexels" component={pexels} 
           options={{
          headerTitleStyle: {
          fontSize:25,
          },
          headerTitle: "pexels",
          headerTitleAlign:"center",
        }
        }
        />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        {/* <Stack.Screen name="harry" component={harry} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
