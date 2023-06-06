import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Title from '../components/title'
const url = "https://cdni.iconscout.com/illustration/premium/thumb/happy-people-raising-and-waving-hands-6497213-5410645.png"

const Result = ({navigation}) => {
  // const {score} = route.params
  // const resultBanner= score>10?"https://cdni.iconscout.com/illustration/premium/thumb/men-celebrating-victory-4587301-3856211.png" :"https://cdni.iconscout.com/illustration/free/thumb/concept-about-business-failure-1862195-1580189.png"
  return (
    <View style={styles.container}>
      <Title titleText='RESULTS' />
      {/* <Text style={styles.scoreValue}>{score}</Text> */}
      <View style = {styles.bannerContainer}>
      <Image 
                source={{uri:url}} 
                style = {styles.banner} 
                resizeMode='contain'
            />
      </View>
      <View>
        <TouchableOpacity onPress = {()=>{navigation.navigate('Home')}}  style = {styles.button}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#1A759F',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  scoreValue:{
    fontSize: 24,
    fontWeight:'800',
    alignSelf:'center'
  }
});