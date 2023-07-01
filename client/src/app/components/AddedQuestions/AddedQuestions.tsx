import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import AddedQuestionListItem from './AddedQuestionListItem';

const AddedQuestions = () => {
  const questions = useSelector((state: RootState) => {
    return state.survey.questions;
  });
  return (
    <>
      {questions &&
        questions.map((question, index) => {
          return <AddedQuestionListItem question={question} key={index} />;
        })}
    </>
  );
};

export default AddedQuestions;
