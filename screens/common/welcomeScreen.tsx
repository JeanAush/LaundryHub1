import React from 'react';
import { View, StyleSheet, ImageBackground, Text, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { useFonts, OpenSans_700Bold, OpenSans_400Regular } from '@expo-google-fonts/open-sans';
import { StatusBar } from 'expo-status-bar';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';

type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Welcome'
>;

interface WelcomeScreenProps {
  navigation: WelcomeScreenNavigationProp;
}

const { height } = Dimensions.get('window');

export default function WelcomeScreen({ navigation }: WelcomeScreenProps) {
  const [fontsLoaded] = useFonts({
    OpenSans_700Bold,
    OpenSans_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground 
      source={require('../../assets/images/welcome.png')} 
      style={styles.background}
      blurRadius={2}
    >
      <StatusBar style="light" />
      <LinearGradient
        colors={['rgba(0, 31, 63, 0.8)', 'transparent']}
        style={styles.gradient}
      />
      
      <View style={styles.container}>
        <Animatable.View 
          animation="fadeInDown" 
          duration={1500}
          style={styles.header}
        >
          <Text style={styles.title}>Laundry Hub</Text>
          <Text style={styles.subtitle}>Premium laundry services at your doorstep</Text>
        </Animatable.View>

        <Animatable.View 
          animation="fadeInUp" 
          duration={1500}
          delay={500}
          style={styles.footer}
        >
          <Button
            title="Get Started"
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate('Home')}
            raised
          />
          <Button
            title="Already have an account? Sign In"
            type="clear"
            titleStyle={styles.secondaryButtonText}
            onPress={() => navigation.navigate('Login')}
          />
        </Animatable.View>
      </View>
    </ImageBackground>
  );
}

// ... (keep the same styles as before)

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: height * 0.6,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  header: {
    paddingTop: height * 0.15,
    paddingHorizontal: 30,
  },
  title: {
    color: 'white',
    fontSize: 42,
    fontFamily: 'OpenSans_700Bold',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 16,
    fontFamily: 'OpenSans_400Regular',
    width: '70%',
    lineHeight: 22,
  },
  footer: {
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: '#87CEEB', // Sky blue from your palette
    borderRadius: 25,
    height: 50,
  },
  buttonText: {
    color: '#001F3F', // Navy blue
    fontFamily: 'OpenSans_700Bold',
    fontSize: 16,
  },
  buttonContainer: {
    marginBottom: 15,
    borderRadius: 25,
  },
  secondaryButtonText: {
    color: 'white',
    fontFamily: 'OpenSans_400Regular',
  },
});