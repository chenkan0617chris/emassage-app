import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { MassageCardProps } from '../types/MassageCard.types';

const MassageCard: React.FC<MassageCardProps> = ({ 
  title, 
  description, 
  price, 
  duration, 
  customers, 
  image,
  onSelect 
}) => (
  <TouchableOpacity style={styles.card}>
    <Image source={image} style={styles.serviceImage} />
    <View style={styles.cardContent}>
      <View style={styles.cardLeft}>
        <Text style={styles.serviceTitle}>{title}</Text>
        <Text style={styles.serviceDesc}>{description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${price}</Text>
          <Text style={styles.duration}>{duration} mins</Text>
        </View>
      </View>
      <View style={styles.cardRight}>
        <Text style={styles.customers}>{customers} served</Text>
        <TouchableOpacity style={styles.selectButton}>
          <Text style={styles.buttonText}>Select</Text>
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
);

export default function HomePage() {
  const services = [
    {
      title: 'Chinese Massage',
      description: 'Traditional healing technique',
      price: 218,
      duration: 60,
      customers: '515,813',
      image: require('../../assets/images/gettyimages-1590247404-612x612.jpg'),
    },
    {
      title: 'Meridian Massage',
      description: 'Energy flow restoration',
      price: 298,
      duration: 80,
      customers: '147,157',
      image: require('../../assets/images/gettyimages-1590247404-612x612.jpg'),
    },
    {
      title: 'Thai SPA',
      description: 'Premium relaxation',
      price: 398,
      duration: 120,
      customers: '252,991',
      image: require('../../assets/images/gettyimages-1590247404-612x612.jpg'),
    },
    {
      title: 'Swedish SPA',
      description: 'Deep tissue relaxation',
      price: 398,
      duration: 120,
      customers: '473,537',
      image: require('../../assets/images/gettyimages-1590247404-612x612.jpg'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Professional Massage Service</Text>
          <Text style={styles.headerSubtitle}>Available in 100+ cities</Text>
        </View>
        
        <View style={styles.servicesContainer}>
          {services.map((service, index) => (
            <MassageCard key={index} {...service} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#00C853',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  servicesContainer: {
    padding: 15,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardLeft: {
    flex: 2,
  },
  cardRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  serviceDesc: {
    color: '#666',
    marginTop: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00C853',
  },
  duration: {
    marginLeft: 10,
    color: '#666',
  },
  customers: {
    fontSize: 12,
    color: '#666',
  },
  selectButton: {
    backgroundColor: '#00C853',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
}); 