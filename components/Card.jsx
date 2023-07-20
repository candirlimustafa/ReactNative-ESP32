
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const MyCard = () => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title>Card Title</Title>
        <Paragraph>This is the content of the card.</Paragraph>
      </Card.Content>
      <Card.Content>
        <Title>Card Title</Title>
        <Paragraph>This is the content of the card.</Paragraph>
      </Card.Content>
      <Card.Content>
        <Title>Card Title</Title>
        <Paragraph>This is the content of the card.</Paragraph>
      </Card.Content>
      <Card.Content>
        <Title>Card Title</Title>
        <Paragraph>This is the content of the card.</Paragraph>
      </Card.Content>
    </Card>

    
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 16,
    elevation: 4,
    borderRadius: 8,
  },
});

export default MyCard;

{
  /*
      <ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        
      <Card style={sty.card}>
      <Card.Content>
        <Title>Card Title</Title>
        <Paragraph>This is the content of the card.</Paragraph>
      </Card.Content>
      </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        
        <Card style={sty.card}>
        <Card.Content>
          <Title>Card Title</Title>
          <Paragraph>This is the content of the card.</Paragraph>
        </Card.Content>
        </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        
        <Card style={sty.card}>
        <Card.Content>
          <Title>Card Title</Title>
          <Paragraph>This is the content of the card.</Paragraph>
        </Card.Content>
        </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        
        <Card style={sty.card}>
        <Card.Content>
          <Title>Card Title</Title>
          <Paragraph>This is the content of the card.</Paragraph>
        </Card.Content>
        </Card>
        </TouchableOpacity>
    
       
      </ScrollView>
  */
}