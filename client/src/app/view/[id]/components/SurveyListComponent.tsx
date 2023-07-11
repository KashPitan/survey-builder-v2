'use client';
import { Button } from '@/styles';
import { ISurveyResponse } from '@shared/interfaces';
import Link from 'next/link';
import React, { FC } from 'react';

const SurveyListComponent: FC<{ survey: ISurveyResponse }> = ({ survey }) => {
  return (
    <>
      <div className="border-2">
        <p>{survey.name && survey.name}</p>
        <p>Questions: {survey.questions.length}</p>
        <p>{typeof survey.id}</p>
        <Button>
          <Link href={`/view/${survey.id}`}>Go to Survey</Link>
        </Button>
      </div>
    </>
  );
};

export default SurveyListComponent;
