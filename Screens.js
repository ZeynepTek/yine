import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { color } from "react-native-reanimated";
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
    color: "white",
    fontSize: 40
  },

  inputText:{
    height:50,
    color:"black",
    width:"80%",
    backgroundColor:"white",
    borderRadius:25,
    height:50,
    marginBottom:20,
    padding:20,
    alignContent:"center",
    justifyContent:"center",
  },
  text: {
    height: 50,
    color: "white",
    fontSize:30,
    marginBottom:20,
    marginTop:50

  },
  loginBtn:{
    width:"80%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10,
    color: "white"
  },
  Image: {
    flex: 1,
    resizeMode: 'contain',
    width: 100,
    height: 100,
    marginBottom:20,

  },
  homeScreen: {
    flex:1,
    fontStyle : "italic",
    fontWeight: "bold", 
    fontSize: 20, 
    color: "white", 
    alignContent:"center",
  },
  loginImage: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
    marginBottom:20,
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
    <Button style={{height: 50, color: "white", fontSize:20}}
      title="Geçen hafta ne oldu?"
      onPress={() =>
        navigation.push("Details", { name: "yine farklı " })
      }
    />
    <Button style={{height: 50, color: "white", fontSize:20}}
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
    <Button style={{height: 50, color: "white", fontSize:20}}  title="Search 2" onPress={() => navigation.push("Search2")} />
    <Button style={{height: 50, color: "white", fontSize:20}}  title="React Native School" onPress={() => 
    {
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
      <Button style={{height: 50, color: "white", fontSize:20}}  title="Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button  style={{height: 50, color: "white", fontSize:20}} title="Sign Out" onPress={() => signOut()} />
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
      <Image style ={styles.Image} source={require('./images/yinelogo.png') } />

      
     < TextInput  
            style={styles.inputText}
            placeholder="e-mail" 
            placeholderTextColor="black"
            onChangeText={text => this.setState({name:text})}
      />

      <TextInput  
            style={styles.inputText}
            placeholder="Şifre" 
            placeholderTextColor="black"
            onChangeText={text => this.setState({password:text})}
      />     

      <Button title="Giriş Yap " onPress={() => signIn()} />

      <Text style = {styles.homeScreen}> Henüz bir hesabın yok mu ? </Text>

      <Button title="Hesap Oluştur " onPress={() => navigation.push("CreateAccount")}/>

    </ScreenContainer>
  );
};


export const CreateAccount = () => {
  const { signUp } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Image style ={styles.loginImage} source={require('./images/chess-piece.png') } />
      <Text style = {styles.text}> HESAP OLUŞTUR </Text>
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
            placeholder="Telefon" 
            placeholderTextColor="black"
            onChangeText={text => this.setState({telNo:text})}
          />

          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="black"
            onChangeText={text => this.setState({email:text})}
          />  

        
      <Button styles = {styles.loginBtn} title="Kaydol !" onPress={() => signUp()} />
    </ScreenContainer>
  );
};