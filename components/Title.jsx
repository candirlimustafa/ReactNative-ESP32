import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View>
      <Text style={styles.HomeScreenText}>Bluetooth Aktivasyonu</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
  HomeScreenText: {
    color: "black",
    fontSize: 20,
    padding: 10,
    paddingLeft: 25,
    paddingTop: 15,
    fontWeight: '500'
  }
})