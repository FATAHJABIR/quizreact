import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const url = "https://cdni.iconscout.com/illustration/premium/thumb/happy-people-raising-and-waving-hands-6497213-5410645.png"

const Result = () => {
  return (
    <View>
      <View>
        <Text>Result</Text>
      </View>
      <View style = {styles.bannerContainer}>
      <Image 
                source={{uri:url}} 
                style = {styles.banner} 
                resizeMode='contain'
            />
      </View>
      <View>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
  banner:{
    height: 300,
    width: 300,
    // backgroundColor: "red"
},
bannerContainer:{
  justifyContent: 'center',
  alignItems: 'center'
}
})