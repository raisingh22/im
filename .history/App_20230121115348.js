import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import demo from './demo';
import 
// import harry from './harry';
// import de from './gallery';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CameraT" component={CameraT} 
           options={{
          headerTitleStyle: {
          fontSize:25,
          },
          headerTitle: "Image",
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
