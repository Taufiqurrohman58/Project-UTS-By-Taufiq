import {StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground, Image} from 'react-native';
import React from 'react';
// import IconMenu from '../components/IconMenu';

// const Data = [
//   {id: 1, label: 'Dana'},
//   {id: 2, label: 'Top Up ML'},
//   {id: 3, label: 'XL'},
//   {id: 4, label: '3'},
// ];
// const Data1 = [
//   {id: 1, label: 'Dana'},
//   {id: 2, label: 'Top Up ML'},
//   {id: 3, label: 'XL'},
//   {id: 4, label: 'token listrik'},
// ];

const Beranda = ({navigation}) => {
  return (
    <View>
      <ImageBackground source={require('../assets/logo.jpg')} style={styles.card}>
        {/* <Image source={require('../assets/taufiq.jpg')} style={styles.cardImage} /> */}

        <Text style={styles.cardTitle}>FIQUR CELL</Text>
        <Text style={styles.cardContent}>Melayani e-transaksi</Text>
      </ImageBackground>
      <View style={styles.container}>
      <View
        style={styles.card2}>
        <Text style={styles.cardTitle2}>Promo Spesial</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Promo')}>
        <Text style={styles.cardContent2}>Lihat Semua>></Text>
        </TouchableOpacity>
      </View>

      {/* <FlatList
        data={Data}
        renderItem={({item}) => <IconMenu label={item.label} />}
        horizontal={true}
      />
      <FlatList
        data={Data1}
        renderItem={({item}) => <IconMenu label={item.label} />}
        horizontal={true}
      />
      <FlatList
        data={Data1}
        renderItem={({item}) => <IconMenu label={item.label} />}
        horizontal={true}
      /> */}
      </View>
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  container: {
    
    padding: 20,
  },
  card: {
    backgroundColor: 'green',
    padding: 20,
    height: 150,

    borderRadius: 10,
    // marginBottom: 20,
  },

  cardTitle: {
    color:'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop:30,
    textAlign: 'center',
  },
  cardContent: {
    color:'white',
    fontSize: 12,
    textAlign: 'center',
  },

  card2: {
    backgroundColor: 'green',
    padding: 10,

    borderRadius: 10,
    marginBottom: 20,
  },

  cardTitle2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContent2: {
    fontSize: 16,
  },
});