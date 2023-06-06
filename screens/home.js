import {Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Title from '../components/title'
const source = "https://ouch-cdn2.icons8.com/NYHT8-hDTdQuJ3LWw4OcQF1NCoKOD9_GSObUw5x78DY/rs:fit:456:456/extend:true/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzIy/L2ZhMWU0MGE0LTU4/ZjctNDZlNS05MGVh/LTdkNjllNGRmZmZk/ZC5zdmc.png";

const Home = ({navigation}) => {
  return (
    <View>
      <Title/>
      <View  style={styles.bannerContainer}>
            <Image 
                source={{uri:source}} 
                style = {styles.banner} 
                resizeMode='contain'
            />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Quiz")}>
        <Text>Mixed messages</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    banner:{
        height: 300,
        width: 300,
        // backgroundColor: "red"
    },
    bannerContainer:{
      justifyContent: 'center',
      alignItems: 'center'
    },
    container:{
      paddingTop: 40,
      paddingHorizontal: 20,
    }
})