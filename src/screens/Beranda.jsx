import {StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';

const Beranda = ({navigation}) => {
  return (
    <View>
      <ImageBackground source={require('../assets/logo.jpg')} style={styles.background}>
        <Text style={styles.isitext1}>FIQUR CELL</Text>
        <Text style={styles.isitext2}>Melayani e-transaksi</Text>
      </ImageBackground>
      <View style={styles.container}>
      <View
        style={styles.btnpromo}>
        <Text style={styles.btnTitle2}>Promo Spesial</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Promo')}>
        <Text style={styles.btnContent2}>Lihat Semua>></Text>
        </TouchableOpacity>
      </View>
      </View>
 
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

  container: { 
    padding: 20,
  },

  btnpromo: {
    backgroundColor: 'green',
    padding: 10,

    borderRadius: 10,
    marginBottom: 20,
  },

  btnTitle2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  btnContent2: {
    fontSize: 16,
  },

});