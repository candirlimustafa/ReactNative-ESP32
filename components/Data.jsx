import { StyleSheet, View, ScrollView, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Card, Title, Paragraph } from 'react-native-paper';




const Data = ({}) => {
  

  return (
    <NavigationContainer >
    <Stack.Navigator>
      <Stack.Screen  name="VERİLER" component={HomeScreen} />
      <Stack.Screen name="Details" component={MyCard} />
    </Stack.Navigator>
    </NavigationContainer>
  
  )
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Verileri Al"
        color="cornflowerblue"
        onPress={() => navigation.navigate('Details')}
      />
    </View>

  );
};
const Stack = createNativeStackNavigator()



const MyCard = ({ navigation }) => {
  return (
    <ScrollView>
    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
      
    <Card style={sty.card}>
    <Card.Cover source={require('C:/Users/mstfc/Desktop/REACT1/projects/secondProject/secondProject/assets/Aspilsan-Slider-2-kopya.png')} />
    <Card.Content>
      <Title>Kimlik Bilgileri</Title>
      <Paragraph>SeriNo_BMS: LASP06 {'\n'}
        ÜretimTarihi: 2022/05/10{'\n'}
        Ürün: BatKod: 10, StokNo: 152-0001-0141
      </Paragraph>
    </Card.Content>
    </Card>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
      
      <Card style={sty.card}>
      <Card.Cover source={require('C:/Users/mstfc/Desktop/REACT1/projects/secondProject/secondProject/assets/4117389.png')} />
      <Card.Content>
        <Title>Kapasite Bilgileri</Title>
        <Paragraph>SoC (%): 8{'\n'}Kalan (mAh): 708{'\n'}Toplam (mAh): 10128{'\n'}SoH (%): 8{'\n'}Çevrim (ad.): 13

</Paragraph>
      </Card.Content>
      </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
      
      <Card style={sty.card}>
      <Card.Cover source={require('C:/Users/mstfc/Desktop/REACT1/projects/secondProject/secondProject/assets/111.png')} />
      <Card.Content>
        <Title>Güvenlik Bilgileri</Title>
        <Paragraph>Gerilim: 47.21{'\n'}Ort Sıcaklık: 0.67{'\n'}Güvenlik: 0</Paragraph>
      </Card.Content>
      </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
      
      <Card style={sty.card}>
      <Card.Cover source={require('C:/Users/mstfc/Desktop/REACT1/projects/secondProject/secondProject/assets/4117389.png')} />
      <Card.Content>
        <Title>Akım Çıkış Bilgileri</Title>
        <Paragraph>Açık: false{'\n'}Gerilim (V): 0.67{'\n'}Akım (A): 0{'\n'}Güç (W): 0</Paragraph>
      </Card.Content>
      </Card>
      </TouchableOpacity>
  
     
    </ScrollView>
  );
};

export default Data

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 10,
        paddingTop: 20,
        marginHorizontal: 16,
      },
})

const sty = StyleSheet.create({
  card: {
    margin: 16,
    elevation: 4,
    borderRadius: 8,
  },
});