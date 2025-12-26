import TaskLogoImage from "@assets/images/task-logo.png";
import { Image, StyleSheet, Text, View } from "react-native";

const HomeScreen=()=>{
return  (
    <View
      style={styles.container} >

<Image source={TaskLogoImage} style={styles.image} />
<Text style={styles.title}>Welcome to bigboss</Text>
<Text style={styles.subtitle}>padma sri - vote for me</Text>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },

  title:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },

  subtitle:{
    fontSize: 16,
    color: '#666',  
    marginTop: 10,
textAlign:'center',

  },

  image:{
    width: 200,
    height: 200,
    marginBottom: 20,
  }
});

export default HomeScreen;