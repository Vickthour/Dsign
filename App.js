
import { StyleSheet, Text, View, ImageBackground,TouchableOpacity, Image  } from 'react-native';



export default function App() {
  return (
    
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require("./assets/baby.png")}>
      
      
      <View style={{flex:1, justifyContent:"center",alignSelf:"center"}}>
        <Image source={require("./assets/logo3.png")} style={{height:120, width:120, justifyContent:"center"}} />
        <Text style={{color:"gold", fontSize:22}}>Welcome Baby</Text>      
      </View>

      <View style={{justifyContent:"flex-end", flex:1 }}>
        <TouchableOpacity style={styles.button}>
          <Text>Testing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Rocking</Text>
        </TouchableOpacity>
      </View>

    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  backgroundColor:"#fff",
  flex:1
    
  },
  image:{
    flex:1
  },
   button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 15,
    borderRadius:2,
    borderColor:'red',
    borderWidth:0.1,
    
    
  },
});
