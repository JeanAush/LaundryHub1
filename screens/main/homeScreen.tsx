import React from 'react';
import { View, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
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
  const { width } = Dimensions.get('window');
  const cardWidth = width / 2 - 24;

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

      {/* Service Cards - Grid Layout */}
      <View style={styles.servicesContainer}>
        {services.map((service) => (
          <Card 
            key={service.id}
            style={[styles.card, { width: cardWidth }]}
            onPress={() => navigation.navigate('ServicesScreen', { service })}
            elevation={3}
          >
            <Card.Content style={styles.cardContent}>
              <Image 
                source={service.icon} 
                style={styles.serviceIcon}
                resizeMode="contain"
              />
              <Text 
                variant="titleMedium" 
                style={styles.serviceTitle}
                numberOfLines={1}
              >
                {service.title}
              </Text>
              <Text 
                variant="bodyMedium" 
                style={styles.serviceDescription}
                numberOfLines={2}
              >
                {service.description}
              </Text>
              <Text variant="titleSmall" style={styles.priceText}>
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
          labelStyle={styles.buttonLabel}
        >
          Schedule Pickup
        </Button>
        <Button 
          mode="outlined" 
          style={styles.actionButton}
          onPress={() => navigation.navigate('TrackOrder')}
          labelStyle={styles.buttonLabel}
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
    tintColor: '#001F3F',
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    marginBottom: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
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
    color: '#001F3F',
    textAlign: 'center',
    marginBottom: 4,
  },
  serviceDescription: {
    color: '#666',
    textAlign: 'center',
    fontSize: 12,
    marginBottom: 8,
    minHeight: 32,
  },
  priceText: {
    color: '#87CEEB',
    fontWeight: 'bold',
  },
  quickActions: {
    marginTop: 24,
    gap: 12,
  },
  actionButton: {
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
  },
  buttonLabel: {
    fontSize: 16,
  },
});