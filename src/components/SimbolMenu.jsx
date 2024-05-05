import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const SimbolMenu = ({label, image}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.box}>
        <Image source={image} style={styles.box} />
      </View>
      <Text style={styles.textIcon}>{label}</Text>
    </TouchableOpacity>
  );
};

export default SimbolMenu;

const styles = StyleSheet.create({
  container: {
    //borderWidth: 1,
    margin: 5,
    padding: 5,
    width: 72,
    justifyContent: 'center',
    alignContent: 'center',
  },
  box: {
    borderWidth: 1,
    width: 61,
    height: 61,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  textIcon: {
    color: 'black',
    textAlign: 'center',
    fontSize:12,
  },
});