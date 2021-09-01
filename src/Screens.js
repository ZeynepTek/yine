import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    Button : {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 5
    }
});

const ScreenContainer = ({ children }) => (
    <View style = {styles.container} > {children}</View>
);

export const Home = () => (
    <ScreenContainer>
        <Text>
            Master List Screen
        </Text>
        <Button title = "react native example" onPress = { () => alert ("denebunu")} />
        <Button title = "react native example" onPress = { () => alert ("denebunu2")} />
        <Button title = "Drawer" onPress = {() => alert ("todo!")} />

    </ScreenContainer>
);

export const Details = () => (
    <ScreenContainer>
        <Text> Search Screen </Text>
        <Button title ="Search 2" onPress = {() => alert("todo!")} />
        <Button title ="React native School" onPress = {() => alert ("deneme3")} />
    </ScreenContainer>
);

export const Search2 = () => (
    <ScreenContainer>
     <Text> Search2 screen </Text>
    </ScreenContainer>

);

export const Profile =({ navigation }) => {
    return (
        <ScreenContainer>
            <Text> Profile Screen </Text>
            <Button title ="Drawer" onPress = {() => alert("todo!")} />
            <Button title ="Sign Out" onPress = {() => alert("todo!")} />
        </ScreenContainer>
    )
};

export const Splash =() => (
    <ScreenContainer>
        <Text> Loading...</Text>
    </ScreenContainer>
);

export const SignIn = ({ navigation}) => {
    return (
        <ScreenContainer>
            <Text> Sign in screen </Text>
            <Button title="Sign in" onPress={() => alert("deneme")} />
            <Button title="Creat account" onPress={() => alert("deneme2")} />

        </ScreenContainer>
    )
};

export const CreateAccount = () => {
    return (
        <ScreenContainer>
            <Text> Creat Account Screen</Text>
            <Button title="Sign Up" onPress = {() => alert("todo")} />

        </ScreenContainer>
    )
};