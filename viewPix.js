
import { StyleSheet, Text, View, Image,TouchableOpacity,Button  } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Button
            title='PULL'
            style={styles.btn} />

             <Button
            title='PUSH'
            style={styles.btn} />  
        </View>

        <View style={{borderWidth:10, borderColor:"black", justifyContent:"center" }}>
            <Image source={require("./assets/logo1.jpg")} resizeMode="cover" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  backgroundColor:"#fff",
  flex: 1, 
  },
  btn: {
    padding:20,
    color: "#f194ff",
  }
});
