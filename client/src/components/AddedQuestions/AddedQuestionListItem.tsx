import React, { FC } from 'react';
import { IQuestion } from '@shared/interfaces';

const AddedQuestionListItem: FC<{ question: IQuestion; index: number }> = ({
  question,
  index,
}) => {
  return (
    // TODO: format this
    <div className="w-64 mb-6">
      <div>
        <div className="flex justify-between">
          <p className="text-xs text-gray-500">Question {index + 1}</p>
          <p className="text-xs text-right  text-gray-500">
            {question.type.toLowerCase()}
          </p>
        </div>
        <p className="text-sm">{question.question}</p>
      </div>
      {/* {question.options?.join()} */}
    </div>
  );
};

export default AddedQuestionListItem;
