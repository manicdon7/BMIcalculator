import { Text, View, TextInput, Button } from 'react-native'
import { withExpoSnack } from 'nativewind';
import { useState } from 'react';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

const HomeScreen = ({navigation}) => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

  const calculateBMI = () => {
    // Perform BMI calculation
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

  };

  return (
    <StyledView>
      <StyledText className='mt-20 ml-20'>Height (cm):</StyledText>
      <TextInput
        keyboardType="numeric"
        value={height}
        onChangeText={(text) => setHeight(text)}
      />

      <StyledText className='pl-20'>Weight (kg):</StyledText>
      <TextInput
        keyboardType="numeric"
        value={weight}
        onChangeText={(text) => setWeight(text)}
      />

      <Button title="Calculate BMI" onPress={calculateBMI} />
      <StyledText>Your BMI is: {bmi}</StyledText>
    </StyledView>
  );
};

export default withExpoSnack(HomeScreen);