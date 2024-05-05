import React from 'react';
import { View, Text, Button, Linking, Image, StyleSheet } from 'react-native';

const ContactScreen = () => {
  const handleCall = () => {
    Linking.openURL('tel:6285947719207');
  };

  const handleWhatsApp = () => {
    Linking.openURL('https://api.whatsapp.com/send?phone=+6285947719207');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.jpg')} style={styles.profileImage} />
      <Text style={styles.title}>Contact Fiqur Cell</Text>
      <View style={styles.button}>
        <Button title="Call" color ='green' onPress={handleCall} />
      </View>
      <View>
        <Button title="WhatsApp" color ='green' onPress={handleWhatsApp} />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop:40,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color:'black',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ContactScreen;