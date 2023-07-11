// TODO: added this to prevent use context error from styled components: needs to be fixed

import Form from './components/Form';

async function getSurvey(id: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/surveys/${id}`);
  const data = await res.json();
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
    </>
  );
};

export default page;
