# Laundry Hub Mobile App

![Laundry Hub Logo](./assets/images/laundyHubIcon.png)

A cross-platform laundry service app built with React Native (Expo) for both iOS and Android.

## Features Implemented (So Far)

✅ **Welcome Screen**  
- Animated introduction screen  
- Branded color scheme (#001F3F navy blue + #87CEEB sky blue)  
- Responsive layout  

✅ **Navigation Setup**  
- React Navigation v6 (Native Stack)  
- Type-safe routing  
- Auth-ready structure  

✅ **Technical Foundation**  
- Expo SDK 49+  
- TypeScript support  
- Firebase integration  
- Cross-platform components  

## Getting Started

### Prerequisites
- Node.js 18.x
- Expo CLI (`npm install -g expo-cli`)
- Yarn (`npm install -g yarn`)

### Installation
```bash
git clone https://github.com/JeanAush/LaundryHub1.git
cd LaundryHub1
npm install

# Start development server
expo start

# For Android
expo start --android

# For iOS
expo start --ios

Technical Stack

    Framework: React Native (Expo)

    State Management: React Context

    Navigation: @react-navigation/native-stack

    Styling: StyleSheet + CSS-in-JS

    Backend: Firebase (Firestore, Auth)

    CI/CD: EAS Build

Next Development Steps

    Authentication Flow

        Login/Signup screens

        Firebase email/password auth

        Social login integration

    Core Features

        Service selection UI

        Order tracking system

        Payment integration (M-Pesa/Stripe)

    Admin Dashboard

        Order management

        Business analytics

How to Contribute

    Fork the repository

    Create a feature branch (git checkout -b feature/your-feature)

    Commit your changes

    Push to the branch (git push origin feature/your-feature)

    Open a Pull Request

Troubleshooting

Common Issues:

    Invalid hooks call → Make sure all dependencies are compatible

    Font not loading → Verify fonts are properly linked

    Firebase errors → Check your firebaseConfig.js