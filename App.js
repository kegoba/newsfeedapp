import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import { StyleSheet, Text, View , Button} from 'rea
import { StyleSheet, View, FlatList, Text, Image, Button } from 'react-native';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee} from '@fortawesome/free-solid-svg-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsFeed from "./components/newsfeed"







library.add(fab, faCheckSquare, faCoffee);

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer style={{ backgroundColor: '#fff' }}>
    <Stack.Navigator>
        <Stack.Screen name="Back" style={{ backgroundColor : '#fff' }} component={NewsFeed} />
    </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App
