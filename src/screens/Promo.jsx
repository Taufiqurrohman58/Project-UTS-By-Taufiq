import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const PromoScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.promoCard}>
        <Image
          source={require('../assets/telkomsel.jpg')}
          style={styles.promoImage}
        />
        <View style={styles.promoDetails}>
          <Text style={styles.promoTitle}>Penawaran Spesial</Text>
          <Text style={styles.promoDescription}>Dapatkan diskon 20% untuk pengisian ulang pulsa Telkomsel. Penawaran terbatas!</Text>
        </View>
      </View>
      <View style={styles.promoCard}>
        <Image
          source={require('../assets/ml.jpg')}
          style={styles.promoImage}
        />
        <View style={styles.promoDetails}>
          <Text style={styles.promoTitle}>Flash Sale</Text>
          <Text style={styles.promoDescription}>Flash sale untuk voucer game Mobile Legend! Hemat hingga 50% untuk game favorit Anda.</Text>
        </View>
      </View>
      <View style={styles.promoCard}>
        <Image
          source={require('../assets/3.jpg')}
          style={styles.promoImage}
        />
        <View style={styles.promoDetails}>
          <Text style={styles.promoTitle}>Kedatangan Baru</Text>
          <Text style={styles.promoDescription}>Perkenalkan paket data terbaru kami. Dapatkan sekarang!</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  promoCard: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  promoImage: {
    width: 315,
    height: 300,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  promoDetails: {
    padding: 15,
  },
  promoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  promoDescription: {
    fontSize: 16,
    color: '#555',
  },
});

export default PromoScreen;
