import { StyleSheet, Button, View, Alert } from 'react-native'
import React from 'react'

const SendMessages = () => {
  return (
    <View style={styles.container}>
     <Button
        title="Mesaj Gönder"
        color="cornflowerblue"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
  )
}

export default SendMessages

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 10,
    paddingTop: 20,
    marginHorizontal: 16,
  },
})