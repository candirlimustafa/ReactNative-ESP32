import { StyleSheet, Button, View, Alert } from 'react-native'
import React from 'react'

const Devices = () => {
  return (
    <View style={styles.container}>
     <Button
        title="Aygıtları Gör"
        color="cornflowerblue"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
  )
}

export default Devices

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 10,
    paddingTop: 20,
    marginHorizontal: 16,
  },
})