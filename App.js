import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet,Image,  Text, View, Button} from 'react-native';


export default function App() {
  return (

      <View style={styles.container}>
         <Image source={require('./images/yine-logo.png')} 
           style={{width: 64, height: 64}}
          />
        <Text style = { styles.greenBig }>Yine !</Text>
        <StatusBar style="auto" />
        <ScrollView>
          <Text style = { styles.blackNormal}> Yine hoşgeldin, bu bir deneme yazısıdır !</Text>
          <Button
            onPress={() => {
            alert('You tapped the button!');
            }}
            title="Press Me"
          />
        </ScrollView>
      </View>


  );
}


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
  }
});
