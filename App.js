
import { StyleSheet, Text, View, Image,TouchableOpacity,Button, StatusBar  } from 'react-native';



export default function App() {
  return (
    
    <View style={styles.container}>
      <StatusBar backgroundColor="#61dafb"/>
        <View style={{flexDirection:"row", justifyContent:"space-between", padding:15,}}>
            <Button
            title='PULL'
            style={styles.btn} />

             <Button
            title='PUSH'
            style={styles.btn} />  
        </View>

        <View style={{borderWidth:10, borderColor:"black", justifyContent:"center", flex: 1}}>
            <Image source={require("./assets/logo1.jpg")} resizeMode="contain" style={{alignSelf:"center",}} />
        </View>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
  backgroundColor:"#000",
  flex: 1, 
  },
  btn: {
    padding:20,
    color: "#f194ff",
  }
});









































// import { StyleSheet, Text, View, ImageBackground,TouchableOpacity, Image  } from 'react-native';



// export default function App() {
//   return (
    
//     <View style={styles.container}>
//       <ImageBackground style={styles.image} source={require("./assets/baby.png")}>
      
      
//       <View style={{flex:1, justifyContent:"center",alignSelf:"center"}}>
//         <Image source={require("./assets/logo3.png")} style={{height:120, width:120, justifyContent:"center"}} />
//         <Text style={{color:"gold", fontSize:22}}>Welcome Baby</Text>      
//       </View>

//       <View style={{justifyContent:"flex-end", flex:1 }}>
//         <TouchableOpacity style={styles.button}>
//           <Text>Testing</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button}>
//           <Text>Rocking</Text>
//         </TouchableOpacity>
//       </View>

//     </ImageBackground>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//   backgroundColor:"#fff",
//   flex:1
    
//   },
//   image:{
//     flex:1
//   },
//    button: {
//     alignItems: "center",
//     backgroundColor: "#DDDDDD",
//     padding: 15,
//     borderRadius:2,
//     borderColor:'red',
//     borderWidth:0.1,
    
    
//   },
// });
