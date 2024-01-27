import React from 'react';
import { Text, View, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { withExpoSnack } from 'nativewind';
import { useState } from 'react';
import { styled } from 'nativewind';
import img from '../assets/Group 1.png';
import { useNavigation } from '@react-navigation/native';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

const HomeScreen = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const navigation = useNavigation(); // Move this inside the component

  const calculateBMI = () => {
    const bmiValue = (weight / ((height / 100) * (height / 100))).toFixed(2);
    setBMI(bmiValue);
    navigation.navigate('Result', { bmi: bmiValue });
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <StyledView className='bg-blue-100 h-screen'>
        <StyledView className='m-10'>
          <StyledText className='text-2xl pt-0'>Welcome😊</StyledText>
          <StyledText className='mt-2 text-3xl font-semibold'>BMI calculator</StyledText>
          <StyledText className='pl-16 text-2xl mt-5'>Check your <StyledText className='font-bold'>BMI</StyledText></StyledText>
          <StyledView className='flex justify-center'>
            <StyledText className='mt-3 text-2xl'>Enter Your Height (cm):</StyledText>
            <StyledTextInput className='border-2 border-black rounded-md pl-5'
              keyboardType="numeric"
              placeholder='Enter Your Height'
              value={height}
              onChangeText={(text) => setHeight(text)}
            />
          </StyledView>
          <StyledView className='pb-5 pt-5'>
            <StyledText className='pl-0 text-2xl'>Enter your Weight (kg):</StyledText>
            <StyledTextInput className='border-2 border-black rounded-md pl-5'
              keyboardType="numeric"
              placeholder='Enter Your weight'
              value={weight}
              onChangeText={(text) => setWeight(text)}
            />
          </StyledView>

          <TouchableOpacity
            style={{ backgroundColor: 'blue', borderRadius: 10, padding: 15, alignItems: 'center', marginHorizontal: 20, marginTop: 20 }}
            onPress={calculateBMI}
          >
            <StyledText style={{ color: 'white', fontSize: 18 }}>Calculate BMI</StyledText>
          </TouchableOpacity>

          {/* {bmi !== null && (
            <StyledText className='pt-5 pl-8'>Your BMI is: {bmi}</StyledText>
          )} */}
          <StyledView className='pl-20 h-60 w-60 mt-14'>
            <Image source={img} alt='image' />
          </StyledView>
        </StyledView>
      </StyledView>
    </ScrollView>
  );
};

export default withExpoSnack(HomeScreen);
