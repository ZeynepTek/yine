import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component =  {HomeScreen} />
        <ScrollView>
        <Text style = { styles.blackNormal}> Yine hoşgeldin, bu bir deneme yazısıdır !</Text>
      </ScrollView>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <View style={styles.container}>
    <Text style = { styles.greenBig }>Yine !</Text>
    <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greenBig: {
    color : 'green',
    fontWeight: 'bold',
    fontSize : 30,
  },
  blackNormal: {
    color : 'black',
    fontStyle : 'italic',
    fontSize : 20
  },
  buttonContainer: {
    margin: 20
  }
 
});