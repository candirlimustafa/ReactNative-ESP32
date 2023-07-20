import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Local  = () => {
  return (
    <View>
      
        <Text style={styles.LocalText}>LOCAL ADRES</Text>

        <Text style={styles.LocalText}>LOCAL İSİM</Text>

    </View>
  )
}

export default Local

const styles = StyleSheet.create({
    LocalText:{
        paddingLeft: 25,
        padding: 10,
        paddingTop: 20,
        fontSize: 15,
        fontWeight: '500'
      }
})