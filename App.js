import { Text, View, TextInput, Button, ScrollView } from 'react-native';
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
    <ScrollView style={{flex:1}}>
    <StyledView className='bg-orange-200'>
      <StyledText className='font-bold text-3xl pl-10 pt-20 underline'>BMI CALCULATOR</StyledText>
      <StyledText className='mt-10 px-10 font-semibold'>Enter your height and weight to find out your BMI</StyledText>
      <StyledView className='flex justify-center'>
        <StyledText className='ml-10 mt-5'>Height (cm):</StyledText>
        <StyledTextInput className='border-2 border-black rounded-md mx-20 pl-20'
          keyboardType="numeric"
          placeholder='Enter Your Height'
          value={height}
          onChangeText={(text) => setHeight(text)}
        />
      </StyledView>
      <StyledView className='pb-5'>
      <StyledText className='pl-12'>Weight (kg):</StyledText>
      <StyledTextInput className='border-2 border-black rounded-md mx-20 pl-20'
        keyboardType="numeric"
        placeholder='Enter Your weight'
        value={weight}
        onChangeText={(text) => setWeight(text)}
      />
      </StyledView>

      <StyledButton title="Calculate BMI" className='mx-20 rounded-md mt-20' onPress={calculateBMI} />

      {bmi !== null && (
        <StyledText className='pt-5 pl-8'>Your BMI is: {bmi}</StyledText>
      )}

      <StyledText className='px-6 pt-5'>Body Mass Index (BMI) is a numerical value derived from an individual's height and weight. It is a widely used metric to assess whether a person has a healthy body weight in relation to their height. BMI provides a simple and quick screening tool to categorize individuals into different weight status categories, such as underweight, normal weight, overweight, and obesity.</StyledText>
      <StyledText className='px-6 pt-3'>Calculation Formula: BMI is calculated by dividing a person's weight in kilograms by the square of their height in meters. The formula is BMI = weight (kg) / (height (m))^2.

        Categories:

        Underweight: BMI less than 18.5
        Normal Weight: BMI between 18.5 and 24.9
        Overweight: BMI between 25 and 29.9
        Obesity: BMI 30 or greater
        Screening Tool: BMI is often used as an initial screening tool to assess whether an individual falls within a healthy weight range or if they might be at risk for health issues related to weight.

        Limitations: While BMI is a useful tool for population-level assessments, it has limitations. It does not differentiate between muscle and fat or account for variations in body composition. Therefore, a person with a high muscle mass may have a higher BMI without necessarily having excess body fat.

        Health Risks: High BMI values, especially in the overweight and obese categories, are associated with an increased risk of various health conditions such as heart disease, diabetes, and certain types of cancer.

        Individual Variability: BMI should be interpreted cautiously, as it does not consider individual variations in factors like muscle mass, distribution of fat, and ethnic differences. It is recommended to use BMI in conjunction with other health assessments for a more comprehensive evaluation.

        Population Guidelines: BMI categories are often used in public health and clinical settings to guide interventions and public health strategies aimed at promoting healthy weight and preventing obesity-related health issues.

      </StyledText>
    </StyledView>
    </ScrollView>
  );
};

export default withExpoSnack(App);
