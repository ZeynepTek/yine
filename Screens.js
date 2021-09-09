import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { AuthContext } from "./context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8fbc8f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
    color: "black",
    fontSize: 30
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  text: {
    height: 50,
    color: "white",
    fontSize:20
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  Image: {
    flex: 1,
    width: 50,
    height: 50,
    resizeMode: 'contain'
  }
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

state={
  name: "",
  lastName: "",
  email:"",
  password:""
}

export const Home = ({ navigation }) => (
  <ScreenContainer>
    <Text>Ana Ekran ! </Text>
    <Button
      title="Geçen hafta ne oldu?"
      onPress={() =>
        navigation.push("Details", { name: "yine farklı " })
      }
    />
    <Button
      title="Bu hafta neler oluyor?"
      onPress={() =>
        navigation.push("thisWeek", { name: "yine farklı" })
      }
    />
  </ScreenContainer>
);

export const Details = ({ route }) => (
  <ScreenContainer>
    <Text>İşte geçen hafta olanlar :</Text>
    {route.params.name && <Text>{route.params.name}</Text>}
  </ScreenContainer>
);

export const thisWeek = ({ route }) => (
  <ScreenContainer>
    <Text>İşte bu hafta olanlar :</Text>
    {route.params.name && <Text>{route.params.name}</Text>}
  </ScreenContainer>
);

export const Search = ({ navigation }) => (
  <ScreenContainer>
    <Text>Search Screen</Text>
    <Button title="Search 2" onPress={() => navigation.push("Search2")} />
    <Button
      title="React Native School"
      onPress={() => {
        navigation.navigate("Home", {
          screen: "Details", 
          params: { name: "React Native School" }
        });
      }}
    />
  </ScreenContainer>
);

export const Search2 = () => (
  <ScreenContainer>
    <Text>Search2 Screen</Text>
  </ScreenContainer>
);

export const Profile = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Sign Out" onPress={() => signOut()} />
    </ScreenContainer>
  );
};

export const Splash = () => (
  <ScreenContainer>
    <Text>Yükleniyor...</Text>
  </ScreenContainer>
);

export const SignIn = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);
  

  return (
    <ScreenContainer>
      <Image source={require('./images/yinelogo.png') } 
      style={{
        width: 100,
        height: 100,
        marginRight: 10,
        marginBottom: 12,
        marginTop: 12}}
      />
      <Text style= {{fontStyle : "italic", fontWeight: "bold", fontSize: 30}}>Giriş Sayfası</Text>
      <Button title="Giriş Yap !" onPress={() => signIn()} />
      <Text style= {{fontSize: 20, color : "white"}}> Henüz bir hesabın yok mu ? </Text>
      <Button
        title="Hesap Oluştur ! "
        onPress={() => navigation.push("CreateAccount")}
      />
    </ScreenContainer>
  );
};


export const CreateAccount = () => {
  const { signUp } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text style = {{fontSize: 25, fontStyle: "italic" }}>Hesap Oluştur ! </Text>
      <View style={styles.inputView}>
          <TextInput  
            style={styles.inputText}
            placeholder="Ad" 
            placeholderTextColor="black"
            onChangeText={text => this.setState({name:text})}
          />

          <TextInput  
            style={styles.inputText}
            placeholder="Soyad" 
            placeholderTextColor="black"
            onChangeText={text => this.setState({lastName:text})}
          />

          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="black"
            onChangeText={text => this.setState({email:text})}
          />  

      </View>
        
      <Button title="Kaydol !" onPress={() => signUp()} />
    </ScreenContainer>
  );
};