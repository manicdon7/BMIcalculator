import { Text, View, TextInput, Button } from 'react-native';
import { withExpoSnack } from 'nativewind';
import { useState } from 'react';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(Button);
const StyledTextInput = styled(TextInput);

const App = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null); // Add state for BMI

  const calculateBMI = () => {
    const bmiValue = (weight / ((height / 100) * (height / 100))).toFixed(2);
    setBMI(bmiValue);
  };

  return (
    <StyledView className='bg-orange-200 h-screen'>
      <StyledText className='font-bold text-3xl pl-10 pt-20 underline'>BMI CALCULATOR</StyledText>
      <StyledText className='mt-10 px-10'>Enter your height and weight to find out your BMI</StyledText>
      <StyledView className='flex justify-center'>
      <StyledText className='ml-10 mt-10'>Height (cm):</StyledText>
      <StyledTextInput className='border-2 border-black rounded-md mx-20 pl-20'
        keyboardType="numeric"
        placeholder='Enter Your Height'
        value={height}
        onChangeText={(text) => setHeight(text)}
        />
        </StyledView>

      <StyledText className='pl-12'>Weight (kg):</StyledText>
      <StyledTextInput className='border-2 border-black rounded-md mx-20 pl-20'
        keyboardType="numeric"
        placeholder='Enter Your weight'
        value={weight}
        onChangeText={(text) => setWeight(text)}
      />

      <StyledButton title="Calculate BMI" className='mx-20 rounded-md mt-10' onPress={calculateBMI} />

      {bmi !== null && (
        <StyledText className='pt-5 pl-8'>Your BMI is: {bmi}</StyledText>
      )}
    </StyledView>
  );
};

export default withExpoSnack(App);
