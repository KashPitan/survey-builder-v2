import React, { FC } from 'react';
import { QuestionType } from '@/constants';

import ShortTextComponent from './Questions/ShortTextComponent';
import MultiOptionSingleSelectComponent from './Questions/MultiOptionSingleSelectComponent';

const QuestionInput: FC<{
  type: QuestionType;
}> = ({ type }) => {
  const renderQuestion = (type: QuestionType) => {
    switch (type) {
      case QuestionType.SHORT_TEXT:
        return <ShortTextComponent />;
      case QuestionType.MULTI_OPTION_SINGLE_SELECT:
        return <MultiOptionSingleSelectComponent />;
    }
  };
  return <>{renderQuestion(type)}</>;
};

export default QuestionInput;
