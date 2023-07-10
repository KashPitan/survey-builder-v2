'use client';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { clearSurvey } from '@/redux/slices/surveySlice';

import axios from 'axios';

import AddedQuestions from './components/AddedQuestions/AddedQuestions';
import SurveySwitch from './components/SurveySwitch';
import Form from './components/SurveyDetailsForm';
import { SubmitSurveyButton } from '@/styles';

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
      <div className="flex justify-center items-center">
        <div className="flex gap-x-32 pb-12">
          <div>
            <Form />
            <SurveySwitch />
          </div>

          <div className="mt-2">
            <AddedQuestions />
            <div className="flex flex-col">
              <SubmitSurveyButton
                className="self-center"
                onClick={onSubmitHandler}
              >
                SUBMIT SURVEY
              </SubmitSurveyButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
