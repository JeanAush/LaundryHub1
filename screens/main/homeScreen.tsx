import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Button, Card, Text } from 'react-native-paper'; // Using Paper for quick UI
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;



const services = [
  {
    id: '1',
    title: 'Wash & Fold',
    icon: require('../../assets/icons/laundry.jpeg'),
    description: 'Regular laundry service (7kg max)',
    price: 'KSh 500'
  },
  {
    id: '2',
    title: 'Dry Cleaning',
    icon: require('../../assets/icons/laundry.jpeg'),
    description: 'Regular laundry service (7kg max)',
    price: 'KSh 500'
  },
  {
    id: '3',
    title: 'Ironing of all',
    icon: require('../../assets/icons/laundry.jpeg'),
    description: 'Regular laundry service (7kg max)',
    price: 'KSh 500'
  },
  {
    id: '4',
    title: 'Personal Family wear',
    icon: require('../../assets/icons/laundry.jpeg'),
    description: 'Regular laundry service (7kg max)',
    price: 'KSh 500'
  },
  {
    id: '5',
    title: 'Bedsheets',
    icon: require('../../assets/icons/laundry.jpeg'),
    description: 'Regular laundry service (7kg max)',
    price: 'KSh 500'
  },
  {
    id: '6',
    title: 'Towels',
    icon: require('../../assets/icons/laundry.jpeg'),
    description: 'Regular laundry service (7kg max)',
    price: 'KSh 500'
  },
  {
    id: '7',
    title: 'Blankets and Duvettes',
    icon: require('../../assets/icons/laundry.jpeg'),
    description: 'Regular laundry service (7kg max)',
    price: 'KSh 500'
  },
  {
    id: '8',
    title: 'Pillows and Curtains',
    icon: require('../../assets/icons/laundry.jpeg'),
    description: 'Regular laundry service (7kg max)',
    price: 'KSh 500'
  },
  
];

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenProp>();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text variant="titleLarge" style={styles.headerText}>
          Welcome back!
        </Text>
        <Image 
          source={require('../../assets/icons/notification.jpg')} 
          style={styles.notificationIcon}
        />
      </View>

      {/* Service Cards */}
      <View style={styles.servicesContainer}>
        {services.map((service) => (
          <Card 
            key={service.id} 
            style={styles.card}
            onPress={() => navigation.navigate('ServicesScreen', { service })}
          >
            <Card.Content style={styles.cardContent}>
              <Image source={service.icon} style={styles.serviceIcon} />
              <Text variant="titleMedium" style={styles.serviceTitle}>
                {service.title}
              </Text>
              <Text variant="bodyMedium">{service.description}</Text>
              <Text variant="bodyLarge" style={styles.priceText}>
                {service.price}
              </Text>
            </Card.Content>
          </Card>
        ))}
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <Button 
          mode="contained" 
          style={styles.actionButton}
          onPress={() => navigation.navigate('SchedulePickup')}
        >
          Schedule Pickup
        </Button>
        <Button 
          mode="outlined" 
          style={styles.actionButton}
          onPress={() => navigation.navigate('TrackOrder')}
        >
          Track Order
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerText: {
    fontWeight: 'bold',
    color: '#001F3F',
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    marginBottom: 16,
    backgroundColor: 'white',
  },
  cardContent: {
    alignItems: 'center',
    padding: 12,
  },
  serviceIcon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  serviceTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#001F3F',
  },
  priceText: {
    color: '#87CEEB',
    fontWeight: 'bold',
    marginTop: 8,
  },
  quickActions: {
    marginTop: 24,
    gap: 12,
  },
  actionButton: {
    borderRadius: 8,
  },
});