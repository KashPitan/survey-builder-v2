// import styles from "./page.module.css";
'use client';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';
import { clearSurvey } from '@/app/redux/slices/surveySlice';

import axios from 'axios';

import AddedQuestions from './components/AddedQuestions/AddedQuestions';
import SurveySwitch from './components/SurveySwitch';
import Form from './components/SurveyDetailsForm';

export default function Home() {
  const survey = useSelector((state: RootState) => {
    return state.survey;
  });
  const dispatch = useDispatch();

  const onSubmitHandler = async () => {
    // TODO: replace axios with fetch and uninstall
    const res = await axios.post('api/surveys', { survey });
    dispatch(clearSurvey());
    console.log(res);
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">SURVEY BUILDER</h1>
      <Form />
      <SurveySwitch />
      <AddedQuestions />
      <button
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={onSubmitHandler}
      >
        SUBMIT SURVEY
      </button>
    </>
  );
}
