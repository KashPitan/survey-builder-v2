'use client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSurveyName } from '@/redux/slices/surveySlice';
import { Input, Label } from '@/styles';

const Form = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  // changes here cause the whole form to re render
  return (
    <>
      <Label htmlFor="survey-name-input">Enter your survey name:</Label>
      <Input
        id="survey-name-input"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value), dispatch(setSurveyName(e.target.value));
        }}
      />
    </>
  );
};

export default Form;
