import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';

const Oylama = (props) => {
    const [Oylanmis, setOylanmis] = useState(true);
  
    return (
      <View>
        <Text>Lütfen Oylamayı yapınız  {Oylanmis ? "oylanmamis" : "oylanmis"}! </Text>
        <Button
          onPress = {() => {
            setOylanmis(false);
          }}
          disabled = {!Oylanmis}
          title = {Oylanmis? "Oyla lütfen!" : "Teşekkürler!"}
        />
      </View>
    );
  
  }
  
  export default Oylama;