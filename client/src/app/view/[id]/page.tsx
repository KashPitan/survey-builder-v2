import { IQuestion } from '@shared/interfaces';
import SurveyBuilder from '../SurveyBuilder';
import FormContainer from './components/FormContainer';

async function getSurvey(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/surveys?id=${id}`
  );
  console.log(res);
  const data = await res.json();
  // console.log(data);
  return data;
}

function buildSurveyQuestions(questions: IQuestion[]) {
  console.log(questions);
  const surveyBuilder = new SurveyBuilder(questions);
  const components = surveyBuilder.getSurveyComponents();
  return components;
}

const page: ({
  params,
}: {
  params: { id: string };
}) => Promise<JSX.Element> = async ({ params }) => {
  const id = params.id;
  const survey = await getSurvey(id);
  const questionComponents = buildSurveyQuestions(survey.questions);

  return (
    <>
      <h1>Survey: {survey.name}</h1>
      <FormContainer questionCount={questionComponents.length}>
        {/* TODO: turn this into a component  */}
        {questionComponents}
      </FormContainer>
    </>
  );
};

export default page;
