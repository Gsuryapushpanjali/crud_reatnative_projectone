import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TaskLogoImage from "../assets/images/task_logo.png";


const HomeScreen=()=>{
const router = useRouter();

return  (
    <View
      style={styles.container}>
<Image source={TaskLogoImage} style={styles.image}/>
<Text style={styles.title}>Welcome to bigboss</Text>
<Text style={styles.subtitle}>padma sri - vote for me</Text>
<TouchableOpacity 
style ={styles.button}
onPress={() => router.push('/notes')}> <Text>Get Started</Text></TouchableOpacity>
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
  },

  button:{
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 30,  
  },

  buttonText:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },



});

export default HomeScreen;