import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Login = () => {
    return (
        <View>
            <Text> Kayıtlı mısın ?</Text>
            <Text> Kayıt ol !</Text>
            <Text> Ad </Text>
            <TextInput
            
            style = {{
                height : 40,
                borderColor : 'gray',
                borderBottomWidth : 1,
                borderBottomStartRadius : 5
            }}

            defaultValue = "adınızı giriniz"
            />
         </View>
    )
}

export default Login;