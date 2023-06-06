import { TouchableOpacity, StyleSheet, Text, View, ViewBase } from 'react-native'
import React from 'react'

const handleNextpress = () =>{
  setQues(ques + 1)
}


const Quiz = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <View style = {styles.top}>
        <Text style = {styles.question}>This is Quiz</Text>
      </View>
      <View style = {styles.options}>
        <TouchableOpacity style = {styles.optionButton}>
          <Text>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.optionButton}>
          <Text>Option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.optionButton}>
          <Text>Option 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.optionButton}>
          <Text>Option 4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity>
          <Text>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNextpress}>
          <Text>NEXT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {()=>{navigation.navigate('Result')}}>
          <Text>END</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Quiz


const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#1A759F',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  question: {
    fontSize: 28,
  },
  option: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#34A0A4',
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  parent: {
    height: '100%',
  },
});