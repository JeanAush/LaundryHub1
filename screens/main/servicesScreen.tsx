import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { Button, Text, Divider, TextInput } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<RootStackParamList, 'ServicesScreen'>;

const ServiceDetailScreen = ({ route, navigation }: Props) => {
  const { service } = route.params;
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const serviceOptions = [
    { id: '1', name: 'Eco-friendly detergent (+KSh 50)' },
    { id: '2', name: 'Fabric softener (+KSh 30)' },
    { id: '3', name: 'Express 24h service (+KSh 200)' },
  ];

  const toggleOption = (optionId: string) => {
    setSelectedOptions(prev =>
      prev.includes(optionId)
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    );
  };

  const calculateTotal = () => {
    const basePrice = 500; // KSh 500 base price
    const optionsPrice = selectedOptions.length * 50; // Simplified calculation
    return basePrice * quantity + optionsPrice;
  };

  return (
    <ScrollView style={styles.container}>
      {/* Service Header */}
      <View style={styles.header}>
        <Image source={service.icon} style={styles.serviceImage} />
        <Text variant="headlineMedium" style={styles.serviceTitle}>
          {service.title}
        </Text>
        <Text variant="bodyLarge" style={styles.serviceDescription}>
          {service.description}
        </Text>
      </View>

      <Divider style={styles.divider} />

      {/* Quantity Selector */}
      <View style={styles.section}>
        <Text variant="titleMedium">Quantity</Text>
        <View style={styles.quantityContainer}>
          <Button 
            mode="outlined" 
            onPress={() => setQuantity(Math.max(1, quantity - 1))}
            style={styles.quantityButton}
          >
            <MaterialCommunityIcons name="minus" size={20} />
          </Button>
          <Text variant="headlineSmall" style={styles.quantityText}>
            {quantity}
          </Text>
          <Button 
            mode="outlined" 
            onPress={() => setQuantity(quantity + 1)}
            style={styles.quantityButton}
          >
            <MaterialCommunityIcons name="plus" size={20} />
          </Button>
        </View>
      </View>

      <Divider style={styles.divider} />

      {/* Service Options */}
      <View style={styles.section}>
        <Text variant="titleMedium">Additional Options</Text>
        {serviceOptions.map(option => (
          <Button
            key={option.id}
            mode={selectedOptions.includes(option.id) ? "contained" : "outlined"}
            onPress={() => toggleOption(option.id)}
            style={styles.optionButton}
          >
            {option.name}
          </Button>
        ))}
      </View>

      <Divider style={styles.divider} />

      {/* Special Instructions */}
      <View style={styles.section}>
        <Text variant="titleMedium">Special Instructions</Text>
        <TextInput
          mode="outlined"
          multiline
          numberOfLines={3}
          placeholder="Any specific requirements?"
          value={specialInstructions}
          onChangeText={setSpecialInstructions}
          style={styles.instructionsInput}
        />
      </View>

      {/* Order Summary */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <Text variant="bodyLarge">Subtotal:</Text>
          <Text variant="bodyLarge">KSh {calculateTotal()}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text variant="bodyLarge">Delivery Fee:</Text>
          <Text variant="bodyLarge">KSh 150</Text>
        </View>
        <View style={[styles.summaryRow, styles.totalRow]}>
          <Text variant="titleLarge">Total:</Text>
          <Text variant="titleLarge">KSh {calculateTotal() + 150}</Text>
        </View>

        <Button 
          mode="contained" 
          onPress={() => navigation.navigate('Checkout', { 
            service,
            quantity,
            selectedOptions,
            specialInstructions,
            total: calculateTotal() + 150
          })}
          style={styles.orderButton}
          labelStyle={styles.orderButtonText}
        >
          Proceed to Checkout
        </Button>
      </View>
    </ScrollView>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  serviceImage: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  serviceTitle: {
    fontWeight: 'bold',
    color: '#001F3F',
    textAlign: 'center',
    marginBottom: 8,
  },
  serviceDescription: {
    color: '#666',
    textAlign: 'center',
  },
  divider: {
    marginVertical: 16,
    backgroundColor: '#EEE',
  },
  section: {
    marginBottom: 24,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
    width: width * 0.6,
    alignSelf: 'center',
  },
  quantityButton: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    marginHorizontal: 16,
    minWidth: 40,
    textAlign: 'center',
  },
  optionButton: {
    marginTop: 8,
    borderColor: '#87CEEB',
  },
  instructionsInput: {
    marginTop: 12,
    backgroundColor: '#FFF',
  },
  summaryContainer: {
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 16,
    marginTop: 24,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  totalRow: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  orderButton: {
    marginTop: 24,
    paddingVertical: 10,
    backgroundColor: '#001F3F',
    borderRadius: 8,
  },
  orderButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ServiceDetailScreen;