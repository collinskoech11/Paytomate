import React from 'react'
import {Text, View, Button } from "react-native"

function Home({navigation}) {
  const pressHandler = () => {
    navigation.navigate('Profile')
  }
  return (
    <View>
      <Text>Home</Text>
      <Button title="go to Profile" onPress={pressHandler}/>
    </View>
  )
}

export default Home