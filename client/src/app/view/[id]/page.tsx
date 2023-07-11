// TODO: added this to prevent use context error from styled components: needs to be fixed

import Form from './components/Form';
import FormContainer from './components/FormContainer';
import SurveyBuilder from './components/SurveyBuilder';

async function getSurvey(id: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/surveys/${id}`);
  const data = await res.json();
  // console.log(data);
  return data;
}

const page: ({
  params,
}: {
  params: { id: number };
}) => Promise<JSX.Element> = async ({ params }) => {
  const { id } = params;
  const survey = await getSurvey(id);
  const questions = survey.questions;

  return (
    <>
      <h1>Survey: {survey.name}</h1>
      <Form questions={questions} />
      {/* <form onSubmit={handleSubmit}>
        <SurveyBuilder questions={questions} />{' '}
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </form> */}

      {/* <FormContainer questionCount={questions.length}>
        <SurveyBuilder questions={questions} />
      </FormContainer> */}
    </>
  );
};

export default page;
