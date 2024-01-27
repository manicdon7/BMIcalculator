import React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { styled } from 'nativewind';
import img from '../assets/Group 1.png';
import { ScrollView } from 'react-native-gesture-handler';

const ResultScreen = ({ route, navigation }) => {
  const bmi = route.params?.bmi;

  const StyledView = styled(View);
  const StyledText = styled(Text);
  const StyledButton = styled(Button);

  // const handleGoBack = () => {
  //   navigation.goBack();
  // };

  // Helper function to categorize BMI into weight status
  const getWeightStatus = (bmiValue) => {
    if (bmiValue < 18.5) {
      return 'Underweight 😔';
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      return 'Normal Weight 😊';
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      return 'Overweight 😐';
    } else {
      return 'Obese 😮';
    }
  };

  const weightStatus = getWeightStatus(parseFloat(bmi));

  return (
    <ScrollView style={{flex:1}}>
    <StyledView className='bg-blue-100 h-screen'>
      {/* <StyledView>
        <StyledButton onPress={handleGoBack} title='Back'>
          Back
        </StyledButton>
      </StyledView> */}
      {bmi !== null && (
        <>
          <StyledText className='pt-40 font-semibold text-xl text-center text-blue-600'>Your BMI is:
            </StyledText>
          <StyledText className='font-bold text-6xl text-center mt-5'>
            {bmi}
            </StyledText>
          <StyledText className='pt-5 text-center'>Weight Status: {weightStatus}</StyledText>
        </>
      )}

      <StyledView className='pl-20 mt-40'>
        <Image source={img} alt='image' />
      </StyledView>
    </StyledView>
      </ScrollView>
  );
};

export default ResultScreen;
