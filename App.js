import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/home";
import Quiz from "./screens/quiz";
import Result from "./screens/result";
import { NavigationContainer } from "@react-navigation/native";



const App = () => {
  return(
    <View style={styles.container}>
      {/* <Home/> */}
      {/* <Quiz/> */}
      {/* <Result/> */}
      <NavigationContainer></NavigationContainer>
    </View>
  )
}

export default App

const styles = StyleSheet.create({

  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});