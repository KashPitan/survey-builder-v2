import React from 'react';
import SurveyListComponent from './[id]/components/SurveyListComponent';
import { ISurveyResponse } from '@shared/interfaces';

async function getSurveys() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/surveys`);
  //   console.log(res);
  const data = await res.json();
  console.log(data);
  return data;
}

const page = async () => {
  const surveys = await getSurveys();
  // TODO: lazy loading
  return (
    <>
      {surveys &&
        surveys.map((survey: ISurveyResponse, index: number) => (
          <SurveyListComponent survey={survey} key={index} />
        ))}
    </>
  );
};

export default page;
