import {StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import SimbolMenu from '../components/SimbolMenu';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';

const Data = [
  {id: 1, label: 'Dana', image: require('../assets/dana.jpg')},
  {id: 2, label: 'Top Up ML', image: require('../assets/ml.jpg')},
  {id: 3, label: 'Smartfren', image: require('../assets/smartfren.jpg')},
  {id: 4, label: '3', image: require('../assets/3.jpg')},
];
const Data2 = [
  {id: 1, label: 'Axis', image: require('../assets/axis.jpg')},
  {id: 2, label: 'Token PLN', image: require('../assets/pln.jpg')},
  {id: 3, label: 'Top Up FF', image: require('../assets/ff.jpg')},
  {id: 4, label: 'OVO', image: require('../assets/ovo.png')},
];

const Data3 = [
  {id: 1, label: 'GoPay', image: require('../assets/gopay.jpg')},
  {id: 2, label: 'ShopeePay', image: require('../assets/pay.jpg')},
  {id: 3, label: 'Telkomsel', image: require('../assets/telkomsel.jpg')},
  {id: 4, label: 'Tokopedia', image: require('../assets/tokopedia.jpg')},
];

const Beranda = ({navigation}) => {
  return (
    <View>
      <ImageBackground source={require('../assets/fiqurcell.jpg')} style={styles.background}>
        <Text style={styles.isitext2}>Melayani e-transaksi</Text>
      </ImageBackground>
      <View style={styles.container}>
      <View
        style={styles.btnpromo}>
        <Text style={styles.btnTitle2}><FontAwesome5 name="bullhorn" size={20} backgroundColor="transparent"></FontAwesome5>Promo Spesial</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Promo')}>
        <Text style={styles.btnContent2}><FontAwesome5 name="angle-double-right" size={15} backgroundColor="transparent"></FontAwesome5>Lihat Semua<FontAwesome5 name="angle-double-left" size={15} backgroundColor="transparent"></FontAwesome5></Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={Data}
        renderItem={({item}) => <SimbolMenu label={item.label} image={item.image} />}
        horizontal={true}
      />
      <FlatList
        data={Data2}
        renderItem={({item}) => <SimbolMenu label={item.label} image={item.image} />}
        horizontal={true}
      />
      <FlatList
        data={Data3}
        renderItem={({item}) => <SimbolMenu label={item.label} image={item.image}/>}
        horizontal={true}
      />

      </View>
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'green',
    padding: 20,
    height: 170,
    borderRadius: 10,
  },

  isitext2: {
    color:'black',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop:70,
    textAlign: 'center',
    fontFamily:'ShadowsIntoLight-Regular',
  },

  container: { 
    padding: 20,
    marginTop:10,
  },

  btnpromo: {
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 2, 
    borderColor: 'green',
    borderRadius: 10,
    marginBottom: 20,
  },

  btnTitle2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'green',
  },
  btnContent2: {
    fontSize: 16,
    color:'black',
  },

});