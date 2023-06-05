import { StyleSheet, Text, View } from "react-native/types";

const App = () => {
  return(
    <View styles={styles.container}>
      <Text>This is learnStuff</Text>
      <Text>This is learnStuff</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({

  container: {
    paddingTop: 40,
    paddingHorizontal: 16
  }
})