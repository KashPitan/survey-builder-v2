'use client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSurveyName } from '@/redux/slices/surveySlice';

const Form = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  // changes here cause the whole form to re render
  return (
    <>
      <label
        htmlFor="survey-name-input"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Enter your survey name:
      </label>
      <input
        id="survey-name-input"
        type="text"
        value={name}
        className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        onChange={(e) => {
          setName(e.target.value), dispatch(setSurveyName(e.target.value));
        }}
      ></input>
    </>
  );
};

export default Form;
