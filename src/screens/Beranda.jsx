import {StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';

const Beranda = ({navigation}) => {
  return (
    <View>
      <ImageBackground source={require('../assets/logo.jpg')} style={styles.background}>
        <Text style={styles.isitext1}>FIQUR CELL</Text>
        <Text style={styles.isitext2}>Melayani e-transaksi</Text>
      </ImageBackground>
 
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'green',
    padding: 20,
    height: 150,
    borderRadius: 10,
  },

  isitext1: {
    color:'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop:30,
    textAlign: 'center',
  },
  isitext2: {
    color:'white',
    fontSize: 12,
    textAlign: 'center',
  },
});