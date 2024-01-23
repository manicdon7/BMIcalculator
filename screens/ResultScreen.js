// screens/ResultScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const ResultScreen = ({ navigation }) => {
  // Get BMI from navigation parameters
  const bmi = navigation.getParam('bmi', '0');

  return (
    <View>
      <Text>Your BMI is: {bmi}</Text>
    </View>
  );
};

export default ResultScreen;
